

$(document).ready(() => {

    //LISTA DE OBJETOS QUE RETORNA LA BD
    let arrData = [
        {
            NOMBRE: "Nombre1",
            CANTIDAD: 2
        },
        {
            NOMBRE: "Nombre2",
            CANTIDAD: 8
        },
        {
            NOMBRE: "Nombre3",
            CANTIDAD: 3
        },
        {
            NOMBRE: "Nombre4",
            CANTIDAD: 5
        }
    ];

    //LISTA DE OBJETOS PARA SETEAR LOS GRAFICOS
    let arrValues = [];

    //POR CADA ITEM A GRAFICAR; SE PASA EL TEXT Y VALUE
    arrData.forEach(item => {
        arrValues.push({
            text: item.NOMBRE,
            value: item.CANTIDAD
        });
    });

    //SE DEFINE OBJETO DE OPCIONES GRAFICO DE BARRAS
    let options_Bar = {
        //ID DEL DIV CONTENEDOR DEL GRAFICO
        idElem: 'Graph_Bar',
        //TITULO DEL GRAFICO
        title: 'Cantidades por Nombre',
        //TEXTO DEL EJE Y
        label_y: 'Cantidades',
        //TEXTO AL PASAR EL MOUSE EN EL GRAFICO (HOVER)
        popover: 'Cantidad: <b>{point.y:.0f}</b>',
        //LISTA DE OBJETOS A GRAFICAR
        data: arrValues
    };

    //LLAMA A LA FUNCION PARA SETEAR EL GRAFICO DE BARRAS Y LE PASA LAS OPCIONES
    Fn_Graph_Bar(options_Bar);

    //SE DEFINE OBJETO DE OPCIONES GRAFICO DE TORTA
    let options_Pie = {
        idElem: 'Graph_Pie',
        title: 'Porcentajes por Nombre',
        label_y: 'Porcentajes',
        popover: 'Cantidad: <b>{point.y:.0f}</b>',
        data: arrValues
    };

    //LLAMA A LA FUNCION PARA SETEAR EL GRAFICO DE TORTA Y LE PASA LAS OPCIONES
    Fn_Graph_Pie(options_Pie);

});
//FUNCION SETEAR GRAFICO DE BARRAS
function Fn_Graph_Bar(options) {
    let arrData = [];
    //Armar Datos
    options.data.forEach((item, i) => {
        arrData.push([
            item.text,
            item.value
        ]);
    });
    //Armar configuración
    let objHC = {
        credits: {
            href: location.origin,
            text: 'Diego_IgnacioJS'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: options.title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                //rotation: -45,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Verdana, sans-serif',
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: options.label_y
            }
        },
        legend: {
            layout: 'horizontal',
            enabled: false
        },
        tooltip: {
            pointFormat: options.popover
        },
        plotOptions: {
            series: {
                color: (() => {
                    let rnd = Math.random();
                    if (rnd <= (1 / 3)) {
                        return "#e50000";
                    }
                    else if ((rnd > (1 / 3)) && (rnd <= (2 / 3))) {
                        return "#e8890d";
                    }
                    else {
                        return "#541d82";
                    }
                })()
            }
        },
        series: [{
            name: 'Population',
            data: arrData
        }]
    };
    //Armar gráfico
    Build(options.idElem, options.title, objHC);
}

//FUNCION SETEAR GRAFICO DE TORTA
function Fn_Graph_Pie(options) {
    let arrData = [];
    //Armar Datos
    options.data.forEach((item, i) => {
        arrData.push({
            name: item.text,
            y: item.value
        });
    });
    //Armar configuración
    let objHC = {
        credits: {
            href: location.origin,
            text: 'Diego_IgnacioJS'
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: options.title
        },
        tooltip: {
            pointFormat: options.popover
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: options.label_y,
            colorByPoint: true,
            data: arrData
        }]
    };
    //Armar gráfico
    Build(options.idElem, options.title, objHC);
}



//FUNCION SETEAR GRAFICO DE LINEAS
function grafico() {

    //LISTA DE DATOS PARA COMPLETAR EL GRAFICO LINEAL
    //DATOS TRAIDOS DESDE UNA BD SQL SERVER USANDO UN BACK DE 4 CAPAS EN VB.NET
    var arrDataLine = [
        {
            "FECHA": "/Date(1653278400000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653282000000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653285600000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653289200000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653292800000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653296400000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653300000000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653303600000)/",
            "NUMERO": 21
          },
          {
            "FECHA": "/Date(1653307200000)/",
            "NUMERO": 18
          },
          {
            "FECHA": "/Date(1653310800000)/",
            "NUMERO": 9
          },
          {
            "FECHA": "/Date(1653314400000)/",
            "NUMERO": 4
          },
          {
            "FECHA": "/Date(1653318000000)/",
            "NUMERO": 35
          },
          {
            "FECHA": "/Date(1653321600000)/",
            "NUMERO": 60
          },
          {
            "FECHA": "/Date(1653325200000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653328800000)/",
            "NUMERO": 50
          },
          {
            "FECHA": "/Date(1653332400000)/",
            "NUMERO": 45
          },
          {
            "FECHA": "/Date(1653336000000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653339600000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653343200000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653346800000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653350400000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653354000000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653357600000)/",
            "NUMERO": 0
          },
          {
            "FECHA": "/Date(1653361200000)/",
            "NUMERO": 0
          }
    ];
    var grafico =0;
    if (grafico == 0) {
        var arrPar = [];
        var arrVal = [];
        for (i = 0; i < arrDataLine.length; i++) {
            arrVal.push(parseFloat(arrDataLine[i].NUMERO));
            arrPar.push(function () {
                //Obtener valores
                //Metodos para parsear las fechas y horas 
                var nDate = String(arrDataLine[i].FECHA);
                nDate = nDate.toUpperCase().replace("/DATE(", "");
                nDate = nDate.replace(")/", "");
                var obj_date = new Date(parseInt(nDate));
                //var dd = parseInt(obj_date.getDate());
                //var MM = parseInt(obj_date.getMonth()) + 1;
                //var yy = parseInt(obj_date.getFullYear());
                //if (dd < 10) { dd = "0" + dd; }
                //if (MM < 10) { MM = "0" + MM; }
                var hh = parseInt(obj_date.getHours());
                var mm = parseInt(obj_date.getMinutes());
                if (hh < 10) { hh = "0" + hh; }
                if (mm < 10) { mm = "0" + mm; }
                return String(hh + ":" + mm);
            }());
        }

        Highcharts.chart('Summary_Graph', {
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: arrPar
            },
            yAxis: {
                title: {
                    text: 'Atenciones'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Total Atenciones',
                data: arrVal
            }]
        });
    };
};


//LA ESTRUCTURA DE LA CONFIGURACION DEL GRAFICO ESTA EN LA DOCUMENTACION https://www.highcharts.com/docs/index
//TODO ES PARAMETRIZABLE USANDO BIEN LAS PROPIEDADES DEL OBJETO QUE SE DEFINE COMO "objHC"

//FUNCION CREA GRAFICO CON LIBRERIA HIGHCHARTS
function Build(id, title, options) {
    let base = $(`#${id}`);
    base.empty();
    Highcharts.chart(id, options);
}
