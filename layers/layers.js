var wms_layers = [];

var format_Adm_desa_Plantungan_0 = new ol.format.GeoJSON();
var features_Adm_desa_Plantungan_0 = format_Adm_desa_Plantungan_0.readFeatures(json_Adm_desa_Plantungan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_desa_Plantungan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_desa_Plantungan_0.addFeatures(features_Adm_desa_Plantungan_0);
var lyr_Adm_desa_Plantungan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adm_desa_Plantungan_0, 
                style: style_Adm_desa_Plantungan_0,
                interactive: true,
                title: '<img src="styles/legend/Adm_desa_Plantungan_0.png" /> Adm_desa_Plantungan'
            });
var format_JNSTanah_1 = new ol.format.GeoJSON();
var features_JNSTanah_1 = format_JNSTanah_1.readFeatures(json_JNSTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JNSTanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JNSTanah_1.addFeatures(features_JNSTanah_1);
var lyr_JNSTanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JNSTanah_1, 
                style: style_JNSTanah_1,
                interactive: true,
                title: '<img src="styles/legend/JNSTanah_1.png" /> JNSTanah'
            });

lyr_Adm_desa_Plantungan_0.setVisible(true);lyr_JNSTanah_1.setVisible(true);
var layersList = [lyr_Adm_desa_Plantungan_0,lyr_JNSTanah_1];
lyr_Adm_desa_Plantungan_0.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_JNSTanah_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BAHAN_INDU': 'BAHAN_INDU', 'FISIOGRAFI': 'FISIOGRAFI', 'JNS_TANAH': 'JNS_TANAH', });
lyr_Adm_desa_Plantungan_0.set('fieldImages', {'KABUPATEN': '', 'DESA': '', 'KECAMATAN': '', 'Shape_Leng': '', 'Shape_Area': '', 'Luas': '', });
lyr_JNSTanah_1.set('fieldImages', {'OBJECTID': '', 'BAHAN_INDU': '', 'FISIOGRAFI': '', 'JNS_TANAH': '', });
lyr_Adm_desa_Plantungan_0.set('fieldLabels', {'KABUPATEN': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas': 'no label', });
lyr_JNSTanah_1.set('fieldLabels', {'OBJECTID': 'no label', 'BAHAN_INDU': 'no label', 'FISIOGRAFI': 'no label', 'JNS_TANAH': 'no label', });
lyr_JNSTanah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});