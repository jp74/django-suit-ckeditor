# from django.core.serializers import json
from django.forms import Textarea
from django.utils.safestring import mark_safe

try:
    import json
except ImportError:
    import django.utils.simplejson as json


class CKEditorWidget(Textarea):
    class Media:
        css = {
            'all': ('suit-ckeditor/ckeditor.css',)
        }
        js = ('suit-ckeditor/ckeditor/ckeditor.js',
              'suit-ckeditor/suit-ckeditor.js',)

    def __init__(self, attrs=None, editor_options=None):
        super(CKEditorWidget, self).__init__(attrs)
        self.editor_options = editor_options or {}


    def render(self, name, value, attrs=None):
        attrs.update({"data-type": "ckeditortype",
                      "data-processed": "0",
                      "data-config": json.dumps(self.editor_options)})
        output = super(CKEditorWidget, self).render(name, value, attrs)
        return output