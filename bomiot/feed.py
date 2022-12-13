from django.contrib.syndication.views import Feed
from django.shortcuts import reverse
from homedocs.models import DetailModel as cndoc
from homedocsen.models import DetailModel as endoc


class DocsCN(Feed):
    title = 'GreaterWMS | 开发文档'
    description = 'GreaterWMS | 完全开源的仓库管理系统'
    link = "/"

    def items(self):
        return cndoc.objects.all()

    def item_title(self, item):
        return item.main_list.category.category

    def item_description(self, item):
        return item.main_list.category.desc[:30]

    def item_link(self, item):
        return reverse('docdetailcn', kwargs={'category_id': item.main_list.category_id, 'list_id': item.main_list_id})

class DocsEN(Feed):
    title = 'GreaterWMS | Documents'
    description = 'GreaterWMS | Open Source Warehouse Management System'
    link = "/"

    def items(self):
        return endoc.objects.all()

    def item_title(self, item):
        return item.main_list.category.category

    def item_description(self, item):
        return item.main_list.category.desc[:30]

    def item_link(self, item):
        return reverse('docdetailen', kwargs={'category_id': item.main_list.category_id, 'list_id': item.main_list_id})