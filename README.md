<div align="center">
  <img src="static/icons/logo.png" alt="Bomiot logo" width="200" height="auto" />
  <h1>Bomiot</h1>
  <p>Open Source One Company Management System</p>

<!-- Badges -->

[![License: APLv2](https://img.shields.io/github/license/Bomiot/Bomiot)](https://opensource.org/licenses/Apache-2.0/)
![Release Version (latest Version)](https://img.shields.io/github/v/release/Bomiot/Bomiot?color=orange&include_prereleases)
![QR Code Support](https://img.shields.io/badge/QR--Code-Support-orange.svg)
![Docker Support](https://img.shields.io/badge/Docker-Support-orange.svg)
![i18n Support](https://img.shields.io/badge/i18n-Support-orange.svg)

![repo size](https://img.shields.io/github/repo-size/Bomiot/Bomiot)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Bomiot/Bomiot)
![Contributors](https://img.shields.io/github/contributors/Bomiot/Bomiot?color=blue)

![GitHub Org's stars](https://img.shields.io/github/stars/Bomiot?style=social)
![GitHub Follows](https://img.shields.io/github/followers/Singosgu?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Bomiot/Bomiot?style=social)
![GitHub Watch](https://img.shields.io/github/watchers/Bomiot/Bomiot?style=social)

![Python](https://img.shields.io/badge/Python-3.11.1-yellowgreen)
![Django](https://img.shields.io/badge/Django-4.1.4-yellowgreen)
![Quasar Cli](https://img.shields.io/badge/Quasar/cli-2.10.1-yellowgreen)
![Vue](https://img.shields.io/badge/Vue-3.2.6-yellowgreen)
![NodeJS](https://img.shields.io/badge/NodeJS-18.12.1-yellowgreen)

[![YouTube](https://img.shields.io/youtube/channel/subscribers/UCPW1wciGMIEh7CYOdLnsloA?color=red&label=YouTube&logo=youtube&style=for-the-badge)](https://www.youtube.com/channel/UCPW1wciGMIEh7CYOdLnsloA)

</div>

[//]: # "Some Link"

## :rocket: Link US

<h4>
    <a href="https://www.56yhz.com/">Home Page</a>
</h4>
<h4>
  <a href="https://www.youtube.com/channel/UCPW1wciGMIEh7CYOdLnsloA">Video Tutorials</a>
</h4>
<h4>
  <a href="https://github.com/Bomiot/Bomiot/issues/new?template=bug_report.md&title=[BUG]">Report Bug</a>
</h4>
<h4>   
  <a href="https://github.com/Bomiot/Bomiot/issues/new?template=feature_request.md&title=[FR]">Request Feature</a>
</h4>
<h4>
  <a href="https://github.com/Bomiot/Bomiot/blob/master/README_CN.md">中文文档</a>
</h4>

[//]: # "About the Project"

## :star2: About the Project

This Inventory management system is the currently Ford Asia Pacific after-sales logistics warehousing supply chain process.
After I leave Ford, I start this project in order to help some who need it.
OneAPP Type. Support scanner PDA, mobile APP, desktop exe, website as well.

[//]: # "Function"

## :dart: Function

-   [x] Supplier Management
-   [x] Customer Management
-   [x] Scanner PDA
-   [x] Cycle Count
-   [x] Order Management
-   [x] Stock Control
-   [x] Safety Stock Show
-   [x] API Documents
-   [x] IOS APP Support
-   [x] Android APP Support
-   [x] Electron APP Support
-   [x] Auto Update
-   [x] i18n Support
-   [x] API Documents

[//]: # "Install"

## :compass: Install

Python install

-   [python 3.11.1](https://www.python.org/downloads/release/python-3111/)

Nodejs install

-   [nodejs 18.12.1](https://nodejs.org/download/release/v18.12.1/)

Clone Project

```shell
git clone https://github.com/Bomiot/Bomiot.git
```

Backend Environment

```shell
cd Bomiot/
pip install -r requirements.txt
```

Frontend Environment

```shell
npm install -g @quasar/cli
npm install -g yarn
cd templates/
yarn install
```

DataBase Migrate

```shell
cd Bomiot/
python manage.py makemigratons
python manage.py migrate
```

### docker(Optional)

```shell
cd Bomiot/
docker-compose up -d
# Change Baseurl
# baseurl Bomiot/templates/public/statics/baseurl.txt
docker-compose restart
```

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

[//]: # "development"

## :hammer_and_wrench: How To Run Development Server:

-   Run Backend:

```shell
cd Bomiot
python manage.py runserver
or
python manage.py runserver 0.0.0.0:8008 # internet
```

-   Run Frontend:

```shell
cd templates
quasar d # http://localhost:8080
or
quasar dev # http://localhost:8080
```

-   Change Request Baseurl

```shell
templates/public/statics/baseurl.txt
```

-   Companion Mobile APP

Bomiot is supported by a companion mobile app which allows users access to run the business well.
It can scan the goods by your camera or your PDA scanner.

[Android](https://production.56yhz.com/media/GWMS.apks)

Companion android app is a apks file, need use [bundletool](https://github.com/google/bundletool/releases) to install apk to your Android Phone

Please confirm you have installed JAVA

```shell
## Take attention on your bundletool version
bundletool-all-1.13.0.jar install-apks --apks=GWMS.apks
```

[//]: # "publish"

## :trumpet: How To Publish Your APP:

-   Web Build:

```shell
cd templates
quasar build # /templates/dist/spa
```

[//]: # "deploy"

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

If you use Bomiot and find it to be useful, please consider making a donation toward its continued development.

[Donate via PayPal](https://paypal.me/singosgu)

## Show

<div align="left">
    <img src="static/img/Bomiot_en.png" alt="Bomiot home" width="" height="400" />
</div>
<div align="left">
    <img src="static/img/mobile_splash.jpg" alt="Bomiot splash" width="200" height="400" />
    <img src="static/img/mobile_dn_en.jpg" alt="Bomiot dn" width="200" height="400" />
    <img src="static/img/mobile_equ_en.jpg" alt="Bomiot goods" width="200" height="400" />
</div>

<!-- License -->

## :warning: License

Distributed under the [APL V2](https://opensource.org/licenses/Apache-2.0/) License. See [LICENSE.txt](https://github.com/Bomiot/Bomiot/blob/master/LICENSE) for more information.

<!-- COMMERCIAL LICENSE -->

## :old_key: Commercial License

-   Don't worry about Commercial License. You will get Free Commercial License while you download the source code.
