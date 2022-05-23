

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

//LA ESTRUCTURA DE LA CONFIGURACION DEL GRAFICO ESTA EN LA DOCUMENTACION https://www.highcharts.com/docs/index
//TODO ES PARAMETRIZABLE USANDO BIEN LAS PROPIEDADES DEL OBJETO QUE SE DEFINE COMO "objHC"

//FUNCION CREA GRAFICO CON LIBRERIA HIGHCHARTS
function Build(id, title, options) {
    let base = $(`#${id}`);
    base.empty();
    Highcharts.chart(id, options);
}
