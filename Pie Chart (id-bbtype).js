// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     trace1 = {
        meta: {columnNames: {
            labels: 'bbtype', 
            values: 'id'
          }}, 
        mode: 'markers', 
        type: 'pie', 
        labelssrc: 'calston757:6:426e8a', 
        labels: ['92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '67', '67', '92', '92', '92', '92', '92', '92', '67', '92', '92', '92', '92', '92', '41', '92', '92', '41', '41', '67', '67', '67', '67', '41', '67', '71', '67', '46', '46', '67', '67', '92', '92', '38', '92', '92', '38', '92', '92', '92', '92', '92', '46', '92', '92', '92', '92', '92', '92', '92', '92', '92', '46', '67', '46', '67', '46', '46', '46', '71', '46', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '71', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '71', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92'], 
        valuessrc: 'calston757:6:5f5b9d', 
        values: ['940', '941', '943', '944', '945', '946', '947', '948', '949', '950', '952', '953', '954', '955', '956', '958', '959', '960', '961', '962', '963', '964', '966', '967', '968', '969', '970', '971', '972', '973', '974', '975', '978', '1233', '1234', '1235', '1236', '1237', '1238', '1242', '1243', '1246', '1253', '1254', '1258', '1259', '1260', '1264', '1265', '1273', '1275', '1276', '1277', '1278', '1279', '1280', '1281', '1282', '1283', '1284', '1285', '1286', '1287', '1288', '1289', '1290', '1291', '1292', '1293', '1294', '1295', '1296', '1297', '1298', '1308', '1309', '1310', '1374', '1439', '1441', '1443', '1486', '1487', '1489', '1490', '1491', '1494', '1495', '1497', '1499', '1500', '1501', '1502', '1503', '1504', '1505', '1506', '1507', '1508', '1510', '1511', '1512', '1513', '1514', '1515', '1516', '1517', '1518', '1519', '1521', '1524', '1526', '1527', '1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1539', '1540', '1541', '1542', '1543', '1544', '1545', '1546', '1547', '1548', '1549', '1550', '1551', '1552', '1553', '1554', '1555', '1556', '1557', '1558', '1561', '1562', '1563', '1564', '1572', '1573', '1574', '1576', '1577', '1581', '1601']
      };
data = [trace1];
layout = {
        xaxis: {
          range: [-1, 6], 
          autorange: true
        }, 
        yaxis: {
          range: [-1, 4], 
          autorange: true
        }, 
        autosize: true, 
        template: {
          data: {
            bar: [
              {
                type: 'bar', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            table: [
              {
                type: 'table', 
                cells: {
                  fill: {color: '#EBF0F8'}, 
                  line: {color: 'white'}
                }, 
                header: {
                  fill: {color: '#C8D4E3'}, 
                  line: {color: 'white'}
                }
              }
            ], 
            carpet: [
              {
                type: 'carpet', 
                aaxis: {
                  gridcolor: '#C8D4E3', 
                  linecolor: '#C8D4E3', 
                  endlinecolor: '#2a3f5f', 
                  minorgridcolor: '#C8D4E3', 
                  startlinecolor: '#2a3f5f'
                }, 
                baxis: {
                  gridcolor: '#C8D4E3', 
                  linecolor: '#C8D4E3', 
                  endlinecolor: '#2a3f5f', 
                  minorgridcolor: '#C8D4E3', 
                  startlinecolor: '#2a3f5f'
                }
              }
            ], 
            mesh3d: [
              {
                type: 'mesh3d', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            contour: [
              {
                type: 'contour', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            heatmap: [
              {
                type: 'heatmap', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            scatter: [
              {
                type: 'scatter', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            surface: [
              {
                type: 'surface', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            heatmapgl: [
              {
                type: 'heatmapgl', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            histogram: [
              {
                type: 'histogram', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            parcoords: [
              {
                line: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}, 
                type: 'parcoords'
              }
            ], 
            scatter3d: [
              {
                type: 'scatter3d', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scattergl: [
              {
                type: 'scattergl', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            choropleth: [
              {
                type: 'choropleth', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            scattergeo: [
              {
                type: 'scattergeo', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            histogram2d: [
              {
                type: 'histogram2d', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            scatterpolar: [
              {
                type: 'scatterpolar', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            contourcarpet: [
              {
                type: 'contourcarpet', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            scattercarpet: [
              {
                type: 'scattercarpet', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scattermapbox: [
              {
                type: 'scattermapbox', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scatterpolargl: [
              {
                type: 'scatterpolargl', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scatterternary: [
              {
                type: 'scatterternary', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            histogram2dcontour: [
              {
                type: 'histogram2dcontour', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ]
          }, 
          layout: {
            geo: {
              bgcolor: 'white', 
              showland: true, 
              lakecolor: 'white', 
              landcolor: 'white', 
              showlakes: true, 
              subunitcolor: '#C8D4E3'
            }, 
            font: {color: '#2a3f5f'}, 
            polar: {
              bgcolor: 'white', 
              radialaxis: {
                ticks: '', 
                gridcolor: '#EBF0F8', 
                linecolor: '#EBF0F8'
              }, 
              angularaxis: {
                ticks: '', 
                gridcolor: '#EBF0F8', 
                linecolor: '#EBF0F8'
              }
            }, 
            scene: {
              xaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }, 
              yaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }, 
              zaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }
            }, 
            title: {x: 0.05}, 
            xaxis: {
              ticks: '', 
              gridcolor: '#EBF0F8', 
              linecolor: '#EBF0F8', 
              automargin: true, 
              zerolinecolor: '#EBF0F8', 
              zerolinewidth: 2
            }, 
            yaxis: {
              ticks: '', 
              gridcolor: '#EBF0F8', 
              linecolor: '#EBF0F8', 
              automargin: true, 
              zerolinecolor: '#EBF0F8', 
              zerolinewidth: 2
            }, 
            ternary: {
              aaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              baxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              caxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              bgcolor: 'white'
            }, 
            colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#19d3f3', '#e763fa', '#fecb52', '#ffa15a', '#ff6692', '#b6e880'], 
            hovermode: 'closest', 
            colorscale: {
              diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
              sequential: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']], 
              sequentialminus: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']]
            }, 
            plot_bgcolor: 'white', 
            paper_bgcolor: 'white', 
            shapedefaults: {
              line: {width: 0}, 
              opacity: 0.4, 
              fillcolor: '#506784'
            }, 
            annotationdefaults: {
              arrowhead: 0, 
              arrowcolor: '#506784', 
              arrowwidth: 1
            }
          }, 
          themeRef: 'PLOTLY_WHITE'
        }
      };
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
        meta: {columnNames: {
            labels: 'bbtype', 
            values: 'id'
          }}, 
        mode: 'markers', 
        type: 'pie', 
        labelssrc: 'calston757:6:426e8a', 
        labels: ['92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '67', '67', '92', '92', '92', '92', '92', '92', '67', '92', '92', '92', '92', '92', '41', '92', '92', '41', '41', '67', '67', '67', '67', '41', '67', '71', '67', '46', '46', '67', '67', '92', '92', '38', '92', '92', '38', '92', '92', '92', '92', '92', '46', '92', '92', '92', '92', '92', '92', '92', '92', '92', '46', '67', '46', '67', '46', '46', '46', '71', '46', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '71', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '71', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92', '92'], 
        valuessrc: 'calston757:6:5f5b9d', 
        values: ['940', '941', '943', '944', '945', '946', '947', '948', '949', '950', '952', '953', '954', '955', '956', '958', '959', '960', '961', '962', '963', '964', '966', '967', '968', '969', '970', '971', '972', '973', '974', '975', '978', '1233', '1234', '1235', '1236', '1237', '1238', '1242', '1243', '1246', '1253', '1254', '1258', '1259', '1260', '1264', '1265', '1273', '1275', '1276', '1277', '1278', '1279', '1280', '1281', '1282', '1283', '1284', '1285', '1286', '1287', '1288', '1289', '1290', '1291', '1292', '1293', '1294', '1295', '1296', '1297', '1298', '1308', '1309', '1310', '1374', '1439', '1441', '1443', '1486', '1487', '1489', '1490', '1491', '1494', '1495', '1497', '1499', '1500', '1501', '1502', '1503', '1504', '1505', '1506', '1507', '1508', '1510', '1511', '1512', '1513', '1514', '1515', '1516', '1517', '1518', '1519', '1521', '1524', '1526', '1527', '1530', '1531', '1532', '1533', '1534', '1535', '1536', '1537', '1539', '1540', '1541', '1542', '1543', '1544', '1545', '1546', '1547', '1548', '1549', '1550', '1551', '1552', '1553', '1554', '1555', '1556', '1557', '1558', '1561', '1562', '1563', '1564', '1572', '1573', '1574', '1576', '1577', '1581', '1601']
      };
data = [trace1];
layout = {
        xaxis: {
          range: [-1, 6], 
          autorange: true
        }, 
        yaxis: {
          range: [-1, 4], 
          autorange: true
        }, 
        autosize: true, 
        template: {
          data: {
            bar: [
              {
                type: 'bar', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            table: [
              {
                type: 'table', 
                cells: {
                  fill: {color: '#EBF0F8'}, 
                  line: {color: 'white'}
                }, 
                header: {
                  fill: {color: '#C8D4E3'}, 
                  line: {color: 'white'}
                }
              }
            ], 
            carpet: [
              {
                type: 'carpet', 
                aaxis: {
                  gridcolor: '#C8D4E3', 
                  linecolor: '#C8D4E3', 
                  endlinecolor: '#2a3f5f', 
                  minorgridcolor: '#C8D4E3', 
                  startlinecolor: '#2a3f5f'
                }, 
                baxis: {
                  gridcolor: '#C8D4E3', 
                  linecolor: '#C8D4E3', 
                  endlinecolor: '#2a3f5f', 
                  minorgridcolor: '#C8D4E3', 
                  startlinecolor: '#2a3f5f'
                }
              }
            ], 
            mesh3d: [
              {
                type: 'mesh3d', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            contour: [
              {
                type: 'contour', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            heatmap: [
              {
                type: 'heatmap', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            scatter: [
              {
                type: 'scatter', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            surface: [
              {
                type: 'surface', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            heatmapgl: [
              {
                type: 'heatmapgl', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            histogram: [
              {
                type: 'histogram', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            parcoords: [
              {
                line: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}, 
                type: 'parcoords'
              }
            ], 
            scatter3d: [
              {
                type: 'scatter3d', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scattergl: [
              {
                type: 'scattergl', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            choropleth: [
              {
                type: 'choropleth', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            scattergeo: [
              {
                type: 'scattergeo', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            histogram2d: [
              {
                type: 'histogram2d', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ], 
            scatterpolar: [
              {
                type: 'scatterpolar', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            contourcarpet: [
              {
                type: 'contourcarpet', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }
              }
            ], 
            scattercarpet: [
              {
                type: 'scattercarpet', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scattermapbox: [
              {
                type: 'scattermapbox', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scatterpolargl: [
              {
                type: 'scatterpolargl', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            scatterternary: [
              {
                type: 'scatterternary', 
                marker: {colorbar: {
                    ticks: '', 
                    outlinewidth: 0
                  }}
              }
            ], 
            histogram2dcontour: [
              {
                type: 'histogram2dcontour', 
                colorbar: {
                  ticks: '', 
                  outlinewidth: 0
                }, 
                autocolorscale: true
              }
            ]
          }, 
          layout: {
            geo: {
              bgcolor: 'white', 
              showland: true, 
              lakecolor: 'white', 
              landcolor: 'white', 
              showlakes: true, 
              subunitcolor: '#C8D4E3'
            }, 
            font: {color: '#2a3f5f'}, 
            polar: {
              bgcolor: 'white', 
              radialaxis: {
                ticks: '', 
                gridcolor: '#EBF0F8', 
                linecolor: '#EBF0F8'
              }, 
              angularaxis: {
                ticks: '', 
                gridcolor: '#EBF0F8', 
                linecolor: '#EBF0F8'
              }
            }, 
            scene: {
              xaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }, 
              yaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }, 
              zaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                gridwidth: 2, 
                linecolor: '#EBF0F8', 
                zerolinecolor: '#EBF0F8', 
                showbackground: true, 
                backgroundcolor: 'white'
              }
            }, 
            title: {x: 0.05}, 
            xaxis: {
              ticks: '', 
              gridcolor: '#EBF0F8', 
              linecolor: '#EBF0F8', 
              automargin: true, 
              zerolinecolor: '#EBF0F8', 
              zerolinewidth: 2
            }, 
            yaxis: {
              ticks: '', 
              gridcolor: '#EBF0F8', 
              linecolor: '#EBF0F8', 
              automargin: true, 
              zerolinecolor: '#EBF0F8', 
              zerolinewidth: 2
            }, 
            ternary: {
              aaxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              baxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              caxis: {
                ticks: '', 
                gridcolor: '#DFE8F3', 
                linecolor: '#A2B1C6'
              }, 
              bgcolor: 'white'
            }, 
            colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#19d3f3', '#e763fa', '#fecb52', '#ffa15a', '#ff6692', '#b6e880'], 
            hovermode: 'closest', 
            colorscale: {
              diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
              sequential: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']], 
              sequentialminus: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']]
            }, 
            plot_bgcolor: 'white', 
            paper_bgcolor: 'white', 
            shapedefaults: {
              line: {width: 0}, 
              opacity: 0.4, 
              fillcolor: '#506784'
            }, 
            annotationdefaults: {
              arrowhead: 0, 
              arrowcolor: '#506784', 
              arrowwidth: 1
            }
          }, 
          themeRef: 'PLOTLY_WHITE'
        }
      };
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});