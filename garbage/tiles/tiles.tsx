<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.9" tiledversion="1.9.2" name="bots" tilewidth="24" tileheight="24" tilecount="16" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="2">
  <image width="8" height="8" source="wall.png"/>
  <objectgroup draworder="index" id="2">
   <object id="2" x="0" y="0" width="8" height="8"/>
  </objectgroup>
 </tile>
 <tile id="12">
  <image width="16" height="8" source="../../../Заготовки/tiles/wall 2x1.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="8"/>
   <object id="2" x="0" y="0" width="16" height="8"/>
  </objectgroup>
 </tile>
 <tile id="10">
  <image width="8" height="16" source="../../../Заготовки/tiles/wall 1x2.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="8" height="16"/>
  </objectgroup>
 </tile>
 <tile id="13">
  <image width="24" height="8" source="../../../Заготовки/tiles/wall 3x1.png"/>
  <objectgroup draworder="index" id="2">
   <object id="2" x="0" y="0" width="24" height="8"/>
  </objectgroup>
 </tile>
 <tile id="11">
  <image width="8" height="24" source="../../../Заготовки/tiles/wall 1x3.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="8" height="24"/>
  </objectgroup>
 </tile>
 <tile id="6" probability="0.005">
  <image width="8" height="8" source="radiation.png"/>
 </tile>
 <tile id="14" probability="0.003">
  <image width="8" height="8" source="../../../Заготовки/tiles/radiation 2.png"/>
 </tile>
 <tile id="15" probability="0.001">
  <image width="8" height="8" source="../../../Заготовки/tiles/radiation 3.png"/>
 </tile>
 <tile id="3" probability="0.004">
  <image width="8" height="8" source="anomaly.png"/>
 </tile>
 <tile id="9">
  <image width="8" height="8" source="search.png"/>
 </tile>
 <tile id="8">
  <image width="8" height="8" source="water.png"/>
 </tile>
 <tile id="4" probability="0.1">
  <image width="8" height="8" source="glass.png"/>
 </tile>
 <tile id="7" probability="0.5">
  <image width="8" height="8" source="swamp.png"/>
 </tile>
 <tile id="1">
  <image width="8" height="8" source="ground.png"/>
 </tile>
 <tile id="0" probability="0.3">
  <image width="8" height="8" source="road.png"/>
 </tile>
 <tile id="5" probability="0.9">
  <image width="8" height="8" source="grass.png"/>
 </tile>
 <wangsets>
  <wangset name="Ground" type="corner" tile="7">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="1" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="4" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="5" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="7" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Water" type="corner" tile="8">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="8" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Anomaly" type="corner" tile="3">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="3" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Radiation" type="corner" tile="6">
   <wangcolor name="" color="#ff0000" tile="6" probability="0.1"/>
   <wangcolor name="" color="#00ff00" tile="14" probability="0.05"/>
   <wangcolor name="" color="#0000ff" tile="15" probability="0.01"/>
   <wangcolor name="" color="#ff7700" tile="1" probability="1"/>
   <wangtile tileid="1" wangid="0,4,0,4,0,4,0,4"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="14" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="15" wangid="0,3,0,3,0,3,0,3"/>
  </wangset>
  <wangset name="Wall" type="corner" tile="2">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="2" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
  <wangset name="Search" type="corner" tile="9">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,1,0,1"/>
  </wangset>
 </wangsets>
</tileset>
