function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// Google Mapの設定
function initMap() {
  // マップの作成
  var latlng = new google.maps.LatLng(33.96592050667765, 131.2327844084559); /* 座標 */
  var myOptions = {
    zoom: 16, /* 拡大比率 */
    center: latlng, /* 表示するマップの中心座標 */
    scrollwheel: false, /* マウスのホイールでマップを拡大縮小させるかどうか */
    disableDoubleClickZoom: true, /* ダブルクリックでのマップの拡大縮小を禁止するかどうか */
    draggable: false, /* マーカーをドラッグで移動可能にするかどうか */
    mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] } /* 地図の種類（通常のマップ） */
  };

  // マップの表示
  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

  // マーカーの作成
  var markerOptions = {
    position: latlng, /* マーカーの座標 */
    map: map, /* どのマップにマーカーを表示させるか */
    title: 'ペットサロンRink',  /* タイトル */
    animation: google.maps.Animation.DROP /* 表示させる際のアニメーション（DROP：上から落ちてくる） */
  };

  // マーカーの表示
  var marker = new google.maps.Marker(markerOptions);
}