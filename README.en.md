<div align="center">
  <img src="static/img/logo.png" alt="GreaterWMS logo" width="200" height="auto" />
  <h1>GreaterWMS</h1>
  <p>Open Source Inventory Management System </p>

<!-- Badges -->
[![License: APLv2](https://img.shields.io/github/license/GreaterWMS/GreaterWMS)](https://opensource.org/licenses/Apache-2.0/)
![Release Version (latest Version)](https://img.shields.io/github/v/release/GreaterWMS/GreaterWMS?color=orange&include_prereleases)
![QR Code Support](https://img.shields.io/badge/QR--Code-Support-orange.svg)
![Docker Support](https://img.shields.io/badge/Docker-Support-orange.svg)
![i18n Support](https://img.shields.io/badge/i18n-Support-orange.svg)

![repo size](https://img.shields.io/github/repo-size/GreaterWMS/GreaterWMS)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/GreaterWMS/GreaterWMS)
![Contributors](https://img.shields.io/github/contributors/GreaterWMS/GreaterWMS?color=blue)

![GitHub Org's stars](https://img.shields.io/github/stars/GreaterWMS?style=social)
![GitHub Follows](https://img.shields.io/github/followers/Singosgu?style=social)
![GitHub Forks](https://img.shields.io/github/forks/GreaterWMS/GreaterWMS?style=social)
![GitHub Watch](https://img.shields.io/github/watchers/GreaterWMS/GreaterWMS?style=social)

![Python](https://img.shields.io/badge/Python-3.9.5-yellowgreen)
![Django](https://img.shields.io/badge/Django-4.1.2-yellowgreen)
![Quasar Cli](https://img.shields.io/badge/Quasar/cli-1.2.1-yellowgreen)
![Vue](https://img.shields.io/badge/Vue-2.6.0-yellowgreen)
![NodeJS](https://img.shields.io/badge/NodeJS-14.19.3-yellowgreen)

[![YouTube](https://img.shields.io/youtube/channel/subscribers/UCPW1wciGMIEh7CYOdLnsloA?color=red&label=YouTube&logo=youtube&style=for-the-badge)](https://www.youtube.com/channel/UCPW1wciGMIEh7CYOdLnsloA)
</div>

[//]: # (Some Link)
## :rocket: Link US
<h4>
    <a href="https://www.56yhz.com/">Home Page</a>
</h4>
<h4>
  <a href="https://www.youtube.com/channel/UCPW1wciGMIEh7CYOdLnsloA">Video Tutorials</a>
</h4>
<h4>
  <a href="https://github.com/GreaterWMS/GreaterwMS/issues/new?template=bug_report.md&title=[BUG]">Report Bug</a>
</h4>
<h4>   
  <a href="https://github.com/GreaterWMS/GreaterWMS/issues/new?template=feature_request.md&title=[FR]">Request Feature</a>
</h4>
<h4>
  <a href="https://github.com/GreaterWMS/GreaterWMS/blob/master/README_CN.md">中文文档</a>
</h4>

[//]: # (About the Project)
## :star2: About the Project

This Inventory management system is the currently Ford Asia Pacific after-sales logistics warehousing supply chain process.
After I leave Ford, I start this project in order to help some who need it. 
OneAPP Type. Support scanner PDA, mobile APP, desktop exe, website as well.

[//]: # (Function)
## :dart: Function

* [x] Supplier Management
* [x] Customer Management
* [x] Scanner PDA
* [x] Cycle Count
* [x] Order Management
* [x] Stock Control
* [x] Safety Stock Show
* [x] API Documents
* [x] IOS APP Support
* [x] Android APP Support
* [x] Electron APP Support
* [x] Auto Update
* [x] i18n Support
* [x] API Documents

[//]: # (Install)
## :compass: Install
Python install
- [python 3.9.5](https://www.python.org/downloads/release/python-395/)

Nodejs install
- [nodejs 14.19.3](https://nodejs.org/download/release/v14.19.3/)

Clone Project
~~~shell
git clone https://github.com/GreaterWMS/GreaterWMS.git
~~~

Backend Environment
~~~shell
cd GreaterWMS/
pip install -r requirements.txt
~~~

Frontend Environment
~~~shell
npm install -g @quasar/cli
npm install -g yarn
cd templates/
yarn install
~~~

DataBase Migrate
~~~shell
cd GreaterWMS/
python manage.py makemigratons
python manage.py migrate
~~~

### docker(Optional)
~~~shell
cd GreaterWMS/
docker-compose up -d
# Change Baseurl
# baseurl GreaterWMS/templates/public/statics/baseurl.txt
docker-compose restart
~~~

<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/3/">Windows X64</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/4/">Centos 7</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/5/">Ubuntu 20</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/6/">IOS Environment</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/7/">Android Environment</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/8/">Android APK Signed</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/11/">Electron Environment</a>
</h4>

[//]: # (development)
## :hammer_and_wrench: How To Run Development Server:

- Run Backend:
~~~shell
cd GreaterWMS
python manage.py runserver
or
python manage.py runserver 0.0.0.0:8008 # internet
~~~

- Run Frontend:
~~~shell
cd templates
quasar d # http://localhost:8080
or
quasar dev # http://localhost:8080
~~~

- Change Request Baseurl
~~~shell
templates/public/statics/baseurl.txt
~~~

- Companion Mobile APP

GreaterWMS is supported by a companion mobile app which allows users access to run the business well.
It can scan the goods by your camera or your PDA scanner.

[Android](https://production.56yhz.com/media/GWMS.apks)

Companion android app is a apks file, need use [bundletool](https://github.com/google/bundletool/releases) to install apk to your Android Phone

Please confirm you have installed JAVA

~~~shell
## Take attention on your bundletool version
bundletool-all-1.13.0.jar install-apks --apks=GWMS.apks
~~~

[//]: # (publish)
## :trumpet: How To Publish Your APP:

- Web Build:

~~~shell
cd templates
quasar build # /templates/dist/spa
~~~

[//]: # (deploy)
## :computer: How To Deploy Server:

<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/9/">Supervisor Process Guarded</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/en-us/docs/2/10/">Nginx Config</a>
</h4>

If the server has SSL enabled, please use HTTPS and WSS, if SSL is not enabled, use HTTP and WS

The front-end code needs to be rebuilt after modification.

<!-- Sponsor -->
## :money_with_wings: Sponsor

If you use GreaterWMS and find it to be useful, please consider making a donation toward its continued development.

[Donate via PayPal](https://paypal.me/singosgu)

## Show
<div align="left">
    <img src="static/img/GreaterWMS_en.png" alt="GreaterWMS home" width="" height="400" />
</div>
<div align="left">
    <img src="static/img/mobile_splash.jpg" alt="GreaterWMS splash" width="200" height="400" />
    <img src="static/img/mobile_dn_en.jpg" alt="GreaterWMS dn" width="200" height="400" />
    <img src="static/img/mobile_equ_en.jpg" alt="GreaterWMS goods" width="200" height="400" />
</div>

<!-- License -->
## :warning: License

Distributed under the [APL V2](https://opensource.org/licenses/Apache-2.0/) License. See [LICENSE.txt](https://github.com/GreaterWMS/GreaterWMS/blob/master/LICENSE) for more information.

<!-- COMMERCIAL LICENSE -->
## :old_key: Commercial License

- Don't worry about Commercial License. You will get Free Commercial License while you download the source code.
