"""Regenerate checked-in translations: python tools/localize_site.py.

English site/index.html owns the layout. This optional, standard-library-only
helper translates text and accessible labels while preserving links, artwork,
published video titles and release versions. Pages needs no build step.
"""
import html
from html.parser import HTMLParser
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / 'site'
URL = 'https://dasistein20.github.io/reVCS_Installer/'
LANGUAGES = ('pl', 'de', 'fr', 'es', 'tr')
STRINGS = json.loads((Path(__file__).parent / 'site-locales.json').read_text(encoding='utf-8'))


class LocalizedPage(HTMLParser):
    def __init__(self, language):
        super().__init__(convert_charrefs=True)
        self.language = language
        self.output = []
        self.stack = []

    def translate(self, value):
        clean = value.strip()
        if clean in STRINGS:
            left = value[:len(value) - len(value.lstrip())]
            right = value[len(value.rstrip()):]
            return left + STRINGS[clean][self.language] + right
        if clean.startswith('Watch on YouTube: '):
            return STRINGS['Watch on YouTube'][self.language] + clean[len('Watch on YouTube'):]
        return value

    def handle_starttag(self, tag, attributes):
        values = dict(attributes)
        if tag == 'html':
            values['lang'] = self.language
        for name in ('aria-label', 'alt', 'data-play-label'):
            if name in values:
                values[name] = self.translate(values[name])
        if tag == 'meta' and values.get('name', values.get('property', '')) in {
            'description', 'og:title', 'og:description', 'og:image:alt',
            'twitter:title', 'twitter:description', 'twitter:image:alt'
        }:
            values['content'] = self.translate(values['content'])
        if tag == 'meta' and values.get('property') == 'og:url':
            values['content'] = URL + self.language + '/'
        if tag == 'link' and values.get('rel') == 'canonical':
            values['href'] = URL + self.language + '/'
        if tag == 'a' and 'data-locale' in values:
            language = values['data-locale']
            values['href'] = '../' if language == 'en' else '../' + language + '/'
            values.pop('aria-current', None)
            if language == self.language:
                values['aria-current'] = 'page'
        for name in ('src', 'href'):
            value = values.get(name, '')
            if value.startswith('assets/') or value.split('?', 1)[0] in ('styles.css', 'app.js'):
                values[name] = '../' + value
        self.output.append('<' + tag + ''.join(
            ' ' + name + ('' if value is None else '="' + html.escape(value, quote=True) + '"')
            for name, value in values.items()
        ) + '>')
        if tag not in ('area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'):
            self.stack.append(tag)

    def handle_endtag(self, tag):
        self.output.append('</' + tag + '>')
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()

    def handle_data(self, data):
        if self.stack[-1:] == ['summary'] and data.strip() == 'EN':
            data = data.replace('EN', self.language.upper())
        elif 'blockquote' in self.stack and data == '”':
            data = {'pl': '”', 'de': '“', 'fr': ' »', 'es': '»', 'tr': '”'}[self.language]
        else:
            data = self.translate(data)
        self.output.append(html.escape(data, quote=False))

    def handle_decl(self, declaration):
        self.output.append('<!' + declaration + '>')

    def handle_comment(self, comment):
        self.output.append('<!--' + comment + '-->')


def main():
    source = (SITE / 'index.html').read_text(encoding='utf-8')
    for language in LANGUAGES:
        page = LocalizedPage(language)
        page.feed(source)
        target = SITE / language / 'index.html'
        target.parent.mkdir(exist_ok=True)
        target.write_text(''.join(page.output), encoding='utf-8', newline='\n')
        print('Generated', target.relative_to(ROOT))


if __name__ == '__main__':
    main()
