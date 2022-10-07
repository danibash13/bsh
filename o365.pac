function FindProxyForURL(url, host) {

    var ip = myIpAddress();

  //21-03-2022 - Salida directa Opera Palacete
    if (shExpMatch(host,"mte1-oc-sc.oracleindustry.com")) return "DIRECT";

  //30-03-2022 - Salida Directa IT
    if (shExpMatch(host,"mapfresimu.siaspa.com")) return "DIRECT";


  //A este host tiene que irse por proxy tanto desde red corporativica como desde WVD
    if (shExpMatch(url,"*intranet.sanidadmadrid.org")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"www.uribekosta.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(url,"*balmaseda.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(url,"*izurtza.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"maite-pre.ma-myassistance.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"www.iseazy.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*sedeelectronica.*")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*playloterias.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*urduliz.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*bizkaia.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*buzonmagico.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*berriz.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*laukiz.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*iurreta.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*.gob.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*.jcyl.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*muxikakoudala.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"sede.bomberostenerife.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"mallabia.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"deriokoudala.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".aragon.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".conselleriadefacenda.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".dipsegovia.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"urbanismosantacruz.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".ayto-ribadesella.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"gatika.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".e-admin.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"redsys.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".digicert.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"aeat.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"agenciatributaria.gob.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"prescriptoresagentes.gruposantander.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"i-cast.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".elmasnou.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".cambrils.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".seu-e.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".esplugues.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".leganes.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".leganes.org")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"urjc.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,".e-ayuntamiento.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"nerbioi-ibaizabal.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"abanto-zierbena.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"markina-xemein.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"atxondo.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"orgt.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"orgt.diba.cat")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"aytoejea.es")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"amorebieta-etxano.eus")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"muskiz.org")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"muskiz.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"zierbena.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"basauri.eus")) return "PROXY proxy.glb.mapfre.net:80";  
 
  //URLs de Grecia
    if (dnsDomainIs(host,"ktelachaias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelmessinias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelkorinthias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelbus.com")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelarkadias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelartas.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelevias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelkilkis.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-argolidas.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-lakonias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-trikala.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-karditsas.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-fokidas.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-kastorias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelargolida.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktelileias.gr")) return "PROXY proxy.glb.mapfre.net:80";
    if (dnsDomainIs(host,"ktel-thesprotias.gr")) return "PROXY proxy.glb.mapfre.net:80";

  //25.10.2021 - Se añaden excepciones temporales para acceso a sitios de EXPOCAT en AZUREWEBSIITES por Internet. 
    if (shExpMatch(host,"mapfregis-fe.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"globalrisk-fe.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"analisis-peligrosidad-fe.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"mafpregis-api.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"mapfregis-fe-service.azurewebsites.net"))   return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"globalrisk-fe-pre.azurewebsites.net"))  return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"analisis-peligrosidad-fe-pre.azurewebsites.net"))   return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"mapfregis-be-pre.azurewebsites.net"))   return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*ciam-ui-euw.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-userrights-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-appsettings-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-bdc-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-featureflags-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-mylocations-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-layers-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-geointelligence-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*geoscience-pdf-prd.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*devscopeapps-powerbitiles.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"*devscopeservices.azurewebsites.net")) return "PROXY proxy.glb.mapfre.net:80";  

  //Direccionamiento de Windows Virtual Desktop sale por Palo Alto.
    if (isInNet(ip, "10.80.212.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(ip, "10.80.198.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(ip, "10.80.197.0", "255.255.255.128")) return "DIRECT";
    if (isInNet(ip, "10.80.196.0", "255.255.255.128")) return "DIRECT";
    if (isInNet(ip, "10.80.196.128", "255.255.255.128")) return "DIRECT";
    if (isInNet(ip, "10.81.128.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(ip, "10.81.160.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(ip, "10.80.216.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(ip, "10.81.168.0", "255.255.248.0")) return "DIRECT";

  //10-08-2022 Ip´s excepcionadas para llegar al cloud de Palo Alto - RT #1093795
   if (shExpMatch(host, "mapfre.gpcloudservice.com")) return "DIRECT";

  //Excepcion AUDATEX
    if (shExpMatch(host,"dda.audatex.com")) return "DIRECT";

  //Excepcion OpenText
    if (shExpMatch(host,"*otms.opentext.com")) return "DIRECT";

  //30-05-2022 Excepción para Intranet de Peru
    if ( shExpMatch(host,"intranet.mapfreperu.com")) return "DIRECT"; 

    //23-11-2021 Teams Live
    if (shExpMatch(host,"*teams.live.com")) return "DIRECT";

  //02.08.2021 Se incluyen reglas de bypass de proxy
    if ( dnsDomainIs(host, ".devopsmap.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".azuremap.net")) return "DIRECT";
  //06-08-2021 - RT #722265
    if ( shExpMatch(host,"app-gdu-pro.azurewebsites.net")) return "DIRECT";
    if ( shExpMatch(host,"app-gdu-pre.azurewebsites.net")) return "DIRECT";


  //26-02-2021 Accesos Pago UK
    if (shExpMatch(host,"payments.mapfre.co.uk")) return "DIRECT";
    if (shExpMatch(host,".mypurecloud.*")) return "DIRECT";
    if (shExpMatch(host,"*.mypurecloud.*")) return "DIRECT";
    if (shExpMatch(host,"*.pure.cloud")) return "DIRECT";

  //18-06-2021 Accesos PT
    if (shExpMatch(host,"multiservicos.mapfre.pt")) return "DIRECT";

  //06-06-2021 Accesos VMIXCALL
    if (shExpMatch(host,"vmix.com")) return "DIRECT";
    if (shExpMatch(host,"*.vmix.com")) return "DIRECT";
    if (shExpMatch(host,"vmixcall.com")) return "DIRECT";
    if (shExpMatch(host,"*.vmixcall.com")) return "DIRECT";
    if (dnsDomainIs(host, ".videology.es")) return "DIRECT";
    if (shExpMatch(host,"videology.es")) return "DIRECT";
    if (shExpMatch(host,"*.videology.es")) return "DIRECT";

    if (shExpMatch(host,"10.87.94.30")) return "PROXY proxy.glb.mapfre.net:80";

  //Pruebas Streaming 01-12-2020
    if ( dnsDomainIs(host, ".vancastvideo.com")) return "DIRECT";
    if ( dnsDomainIs(host, "wowzaprod4-i.akamaihd.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".hivestreaming.com")) return "DIRECT";
    if ( dnsDomainIs(host, "hivestreaming.com")) return "DIRECT";
    if ( dnsDomainIs(host, ".wowza.com")) return "DIRECT";

  //LongTail
    if (shExpMatch(host,"web.longtail.pre.aws.mapfre.net")) return "PROXY proxy.glb.mapfre.net:80";
    if (shExpMatch(host,"longtail.mapfre.net")) return "PROXY proxy.glb.mapfre.net:80";

  //Excepcionamos dominios internos de MAPFRE
    if ( dnsDomainIs(host, ".mapfre.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".cdnmapfre.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".solunionseguros.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".solunion.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".verti")) return "DIRECT";
    if ( dnsDomainIs(host, ".cm.es")) return "DIRECT";
    if ( dnsDomainIs(host, ".elpuente.*")) return "DIRECT";
    if ( dnsDomainIs(host, ".cgi.int")) return "DIRECT";
    if ( dnsDomainIs(host, "siemus.mpciltmn.net")) return "DIRECT";
    if ( dnsDomainIs(host, ".mapfre.rede")) return "DIRECT";
    if ( shExpMatch(host,"mws.mapfremx.com.mx")) return "DIRECT";
    if (shExpMatch(host,"documentprinting.mapfre.co.uk")) return "DIRECT";

    if ( dnsDomainIs(host, ".santandermapfre.net")) return "DIRECT";
    if ( shExpMatch(url,"*santandermapfre.net")) return "DIRECT";
    if ( dnsDomainIs(host, "weeklyconnections.mapfreusa.com")) return "DIRECT";
    if ( dnsDomainIs(host, "vdicitrixpa.mapfrepma.local")) return "DIRECT";

//2021.10.21: se añade regla para acceso directo a dominio azurewebsites.net
    if ( dnsDomainIs(host, ".azurewebsites.net")) return "DIRECT";

  //Proxies Inversos de Mapfre
    if ( shExpMatch(host,"autodiscover.mapfre.com")) return "DIRECT";
    if ( shExpMatch(url,"*autodiscover.mapfre.com")) return "DIRECT";
    if ( shExpMatch(host,"meet.mapfre.com")) return "DIRECT";
    if ( shExpMatch(url,"*meet.mapfre.com")) return "DIRECT";
    if ( shExpMatch(host,"dialin.mapfre.com")) return "DIRECT";
    if ( shExpMatch(url,"*dialin.mapfre.com")) return "DIRECT";
    if ( shExpMatch(host,"join.mapfre.com")) return "DIRECT";
    if ( shExpMatch(url,"*join.mapfre.com")) return "DIRECT";
    if ( shExpMatch(host,"woaw.mapfre.com")) return "DIRECT";
    if ( shExpMatch(url,"*woaw.mapfre.com")) return "DIRECT";

  //Proxies Inversos de Solunion
    if  ( shExpMatch(host,"lyncdiscover.mapfre.com")) return "DIRECT";
    if  ( shExpMatch(host,"meet.solunionseguros.com")) return "DIRECT";
    if  ( shExpMatch(host,"autodiscover.solunionseguros.com"))  return "DIRECT";
    if  ( shExpMatch(host,"lyncdiscover.solunionseguros.com"))  return "DIRECT";
    if ( shExpMatch(host,"autodiscover.solunion.com.ar")) return "DIRECT";
    if ( shExpMatch(host,"autodiscover.solunion.cl"))  return "DIRECT";
    if ( shExpMatch(host,"autodiscover.solunion.co"))  return "DIRECT";
    if ( shExpMatch(host,"autodiscover.solunion.mx"))  return "DIRECT";
    if ( shExpMatch(host,"autodiscover.solunion.com"))  return "DIRECT";

  //29/06/2021: Aplicacion Mapfre multimedia
    if ( shExpMatch(host,"d3rqj7yls8cxq2.cloudfront.net")) return "DIRECT";
    if ( shExpMatch(host,"twilio.com")) return "DIRECT";
    if ( dnsDomainIs(host, ".twilio.com")) return "DIRECT";

  //Red Interna
    if (isPlainHostName(host)) return "DIRECT";
    if (shExpMatch(host, "10.*")||shExpMatch(host, "192.168.*")||shExpMatch(host, "127.0.0.*")) return "DIRECT";

  //Portal Consejero
    if ( shExpMatch(host,"wconsejero.mapfre.com")) return "PROXY 10.229.177.44:80";
    if ( shExpMatch(host,"portalconsejero.mapfre.com")) return "PROXY 10.229.177.141:80";

  //26-04-2018: Excepciones para acceso a proxies inversos VPN SSL por proxy explicito en un CPD u otro.
    if  ( shExpMatch(host,"ExtLyncWeb.mapfre.com")) return "DIRECT";
    if  ( shExpMatch(host,"ExtOwaWeb.mapfre.com")) return "PROXY 10.231.177.44:80";
    if  ( shExpMatch(host,"hybridcas.mapfre.com"))  return "PROXY 10.231.177.44:80";
    if  ( shExpMatch(host,"extlyncweb.solunionseguros.com")) return "PROXY 10.231.177.44:80";
    if  ( shExpMatch(host,"ExtOwaWeb.solunionseguros.com")) return "PROXY 10.231.177.44:80";

    //Excepciones para direccionamiento de CPD y VDI. 29/11/2019
      if ( shExpMatch(host, "outlook.office.com") ||
      dnsDomainIs(host, ".office.com") ||
      dnsDomainIs(host, ".office365.com") ||
      dnsDomainIs(host, ".sharepoint.com") ||
      dnsDomainIs(host, ".lync.com") ||
      dnsDomainIs(host, ".broadcast.skype.com") ||
      dnsDomainIs(host, ".officeapps.live.com") ||
      dnsDomainIs(host, "office.live.com") ||
      dnsDomainIs(host, ".msappproxy.net") ||
      dnsDomainIs(host, "account.activedirectory.windows.net") ||
      dnsDomainIs(host, "accounts.accesscontrol.windows.net") ||
      dnsDomainIs(host, ".microsoftonline.com") ||
      dnsDomainIs(host, "autologon.microsoftazuread-sso.com") ||
      dnsDomainIs(host, "login.windows.net") ||
      dnsDomainIs(host, "microsoftonline-p.net") ||
      dnsDomainIs(host, ".portal.cloudappsecurity.com") ||
      dnsDomainIs(host, ".microsoft.com") ||
      dnsDomainIs(host, "account.office.net") ||
      dnsDomainIs(host, "sharepointonline.com") ||
      dnsDomainIs(host, ".onmicrosoft.com") ||
      shExpMatch(host,"aad.portal.azure.com")||
      dnsDomainIs(host, "aka.ms") ||
      dnsDomainIs(host, ".servicebus.windows.net") ||
      dnsDomainIs(host, "servicebus.windows.net") ||
      dnsDomainIs(host, "app.powerbi.com") ||
      dnsDomainIs(host, "api.powerbi.com") ||
      dnsDomainIs(host, "content.powerapps.com") ||
      dnsDomainIs(host, "powerbicdn.azureedge.net") ||
      dnsDomainIs(host, ".analysis.windows.net") ||
      dnsDomainIs(host, ".powerbi.com") ||
      dnsDomainIs(host, ".pbidedicated.windows.net") ||
      dnsDomainIs(host, "enterpriseregistration.windows.net"))
      {
        if (isInNet(ip, '10.229.240.0', '255.255.240.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.0.0', '255.255.224.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.32.0', '255.255.248.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.40.0', '255.255.248.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.48.0', '255.255.252.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.52.0', '255.255.254.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.58.0', '255.255.255.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.59.0', '255.255.255.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.60.0', '255.255.255.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.64.0', '255.255.240.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.80.0', '255.255.255.192')) return 'DIRECT';
        if (isInNet(ip, '10.96.96.0', '255.255.240.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.112.0', '255.255.248.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.120.0', '255.255.248.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.128.0', '255.255.248.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.136.0', '255.255.252.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.140.0', '255.255.252.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.144.0', '255.255.254.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.146.0', '255.255.254.0')) return 'DIRECT';
        if (isInNet(ip, '10.96.160.0', '255.255.224.0')) return 'DIRECT';
        if (isInNet(ip, '10.97.96.0', '255.255.224.0')) return 'DIRECT';
        if (isInNet(ip, '10.139.160.15', '255.255.255.0')) return 'DIRECT';
      }

    if (isInNet(ip, "10.224.0.0", "255.248.0.0")) return "PROXY proxytal.glb.mapfre.net:80";
    if (isInNet(ip, "10.96.0.0", "255.248.0.0")) return "PROXY proxytal.glb.mapfre.net:80";
    if (isInNet(ip, "10.40.200.0", "255.255.248.0")) return "PROXY proxytal.glb.mapfre.net:80";
    if (isInNet(ip, "10.40.208.0", "255.255.248.0")) return "PROXY proxytal.glb.mapfre.net:80";
    if (isInNet(ip, "10.40.224.0", "255.255.248.0")) return "PROXY proxytal.glb.mapfre.net:80";
    if (isInNet(ip, "10.40.236.0", "255.255.252.0")) return "PROXY proxytal.glb.mapfre.net:80";

      if ( shExpMatch(host, "outlook.office.com") ||
      dnsDomainIs(host, ".office.com") ||
      dnsDomainIs(host, ".office365.com") ||
      dnsDomainIs(host, ".sharepoint.com") ||
      dnsDomainIs(host, ".lync.com") ||
      dnsDomainIs(host, ".broadcast.skype.com") ||
      dnsDomainIs(host, ".officeapps.live.com") ||
      dnsDomainIs(host, "office.live.com") ||
      dnsDomainIs(host, ".msappproxy.net") ||
      dnsDomainIs(host, "account.activedirectory.windows.net") ||
      dnsDomainIs(host, "accounts.accesscontrol.windows.net") ||
      dnsDomainIs(host, ".microsoftonline.com") ||
      dnsDomainIs(host, "autologon.microsoftazuread-sso.com") ||
      dnsDomainIs(host, "login.windows.net") ||
      dnsDomainIs(host, "microsoftonline-p.net") ||
      dnsDomainIs(host, ".portal.cloudappsecurity.com") ||
      dnsDomainIs(host, ".microsoft.com") ||
      dnsDomainIs(host, "account.office.net") ||
      dnsDomainIs(host, "sharepointonline.com") ||
      dnsDomainIs(host, ".onmicrosoft.com") ||
      shExpMatch(host,"aad.portal.azure.com")||
      dnsDomainIs(host, "aka.ms") ||
      dnsDomainIs(host, ".servicebus.windows.net") ||
      dnsDomainIs(host, "servicebus.windows.net") ||
      dnsDomainIs(host, "app.powerbi.com") ||
      dnsDomainIs(host, "api.powerbi.com") ||
      dnsDomainIs(host, "content.powerapps.com") ||
      dnsDomainIs(host, "powerbicdn.azureedge.net") ||
      dnsDomainIs(host, ".analysis.windows.net") ||
      dnsDomainIs(host, ".powerbi.com") ||
      dnsDomainIs(host, ".pbidedicated.windows.net") ||
      dnsDomainIs(host, "enterpriseregistration.windows.net"))
      {
      return 'DIRECT';
      }

  return "PROXY proxytal.glb.mapfre.net:80";
}
