from django.contrib.sitemaps import Sitemap
from homedocs.models import DetailModel as cndoc
from homedocsen.models import DetailModel as endoc
from pluginscn.models import DetailModel as cnplugin
from pluginsen.models import DetailModel as enplugin
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'never'
    protocol = 'https'

    def items(self):
        return ['home', 'homecn', 'homeen', 'aboutcn','abouten','doccategorycn','doccategoryen', 'plugincategorycn', 'plugincategoryen']

    def location(self, item):
        return reverse(item)

class DocsCN(Sitemap):
    changefreq = "weekly"
    priority = 0.6
    protocol = 'https'

    def items(self):
        return cndoc.objects.all()

    def location(self, obj):
        return reverse('docdetailcn', kwargs={'category_id': obj.main_list.category_id, 'list_id': obj.main_list_id})

class DocsEN(Sitemap):
    changefreq = "weekly"
    priority = 0.6
    protocol = 'https'

    def items(self):
        return endoc.objects.all()

    def location(self, obj):
        return reverse('docdetailen', kwargs={'category_id': obj.main_list.category_id, 'list_id': obj.main_list_id})

class PluginCN(Sitemap):
    changefreq = "weekly"
    priority = 0.6
    protocol = 'https'

    def items(self):
        return cnplugin.objects.all()

    def location(self, obj):
        return reverse('plugindetailcn', kwargs={'category_id': obj.category_id})

class PluginEN(Sitemap):
    changefreq = "weekly"
    priority = 0.6
    protocol = 'https'

    def items(self):
        return enplugin.objects.all()

    def location(self, obj):
        return reverse('plugindetailen', kwargs={'category_id': obj.category_id})

sitemaps = {
    'docscn': DocsCN,
    'docsen': DocsEN,
    'plugincn': PluginCN,
    'pluginen': PluginEN,
    'staticview': StaticViewSitemap,
}