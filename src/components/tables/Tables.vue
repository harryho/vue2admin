<template>
  <section class="content">
    <div class="row center-block">
      <h2>Simple</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Striped Full Width Table</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-red">55%</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Clean database</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">70%</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Cron job running</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-light-blue">30%</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Fix and squish bugs</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
    <div class="row center-block">
      <h2>Simple Data tables</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Simple Data Table With Pagination</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <!--<table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Rendering engine</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Browser</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Platform(s)</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Engine version</th>
                        <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">CSS grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">Blink</td>
                        <td>Iridium  54.0</td>
                        <td>GNU/Linux</td>
                        <td>54</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                        <td>1.9</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Camino 1.5</td>
                        <td>OSX.3+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape 7.2</td>
                        <td>Win 95+ / Mac OS 8.6-9.2</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape Browser 8</td>
                        <td>Win 98SE+</td>
                        <td>1.7</td>
                        <td>A</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Netscape Navigator 9</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td>1.8</td>
                        <td>A</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Gecko</td>
                        <td>Mozilla 1.0</td>
                        <td>Win 95+ / OSX.1+</td>
                        <td>1</td>
                        <td>A</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Rendering engine</th>
                        <th colspan="1" rowspan="1">Browser</th>
                        <th colspan="1" rowspan="1">Platform(s)</th>
                        <th colspan="1" rowspan="1">Engine version</th>
                        <th colspan="1" rowspan="1">CSS grade</th>
                      </tr>
                    </tfoot>
                  </table>-->
                  <table id="example1" class="display" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
var tableData = [
          ["Trident", "Internet Explorer 4.0", "Win 95+", "	4	", "X"],
          ["Trident", "Internet Explorer 5.0", "Win 95+", "	5	", "C"],
          ["Trident", "Internet Explorer 5.5", "Win 95+", "	5.5	", "A"],
          ["Trident", "Internet Explorer 6", "Win 98+", "	6	", "A"],
          ["Trident", "Internet Explorer 7", "Win XP SP2+", "	7	", "A"],
          ["Trident", "AOL      browser (AOL desktop)", "Win XP", "6	", "A"],
          ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7	", "A"],
          ["Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", "1.8	", "A"],
          ["Gecko", "Firefox 2.0", "Win 98+ / OSX.2+", "1.8	", "A"],
          ["Gecko", "Firefox 3.0", "Win 2k+ / OSX.3+", "1.9	", "A"],
          ["Gecko", "Camino 1.0", "OSX.2+", "1.8	", "A"],
          ["Gecko", "Camino 1.5", "OSX.3+", "1.8	", "A"],
          ["Gecko", "Netscape 7.2", "Win 95+ / Mac OS 8.6-9.2",	"1.7	", "A"],
          ["Gecko", "Netscape Browser 8", "Win 98SE+", "1.7	", "A"],
          ["Gecko", "Netscape Navigator 9", "Win 98+ / OSX.2+", "1.8	", "A"],
          ["Gecko", "Mozilla 1.0", "Win 95+ / OSX.1+",	"1	", "A"],
          ["Gecko", "Mozilla 1.1", "Win 95+ / OSX.1+", "1.1	", "A"],
          ["Gecko", "Mozilla 1.2", "Win 95+ / OSX.1+", "1.2	", "A"],
          ["Gecko", "Mozilla 1.3", "Win 95+ / OSX.1+", "1.3	", "A"],
          ["Gecko", "Mozilla 1.4", "Win 95+ / OSX.1+", "1.4	", "A"],
          ["Gecko", "Mozilla 1.5", "Win 95+ / OSX.1+", "1.5	", "A"],
          ["Gecko", "Mozilla 1.6", "Win 95+ / OSX.1+", "1.6	", "A"],
          ["Gecko", "Mozilla 1.7", "Win 98+ / OSX.1+", "1.7	", "A"],
          ["Gecko", "Mozilla 1.8", "Win 98+ / OSX.1+", "1.8	", "A"],
          ["Gecko", "Seamonkey 1.1", "Win 98+ / OSX.2+", "1.8	", "A"],
          ["Gecko", "Epiphany 2.20", "Gnome", "1.8	", "A"],
          ["Webkit", "Safari 1.2", "OSX.3	", "125.5	", "A"],
          ["Webkit", "Safari 1.3", "OSX.3	", "312.8	", "A"],
          ["Webkit", "Safari 2.0", "OSX.4+", "	419.3	", "A"],
          ["Webkit", "Safari 3.0", "OSX.4+", "	522.1	", "A"],
          ["Webkit", "OmniWeb 5.5", "OSX.4+", "	420	", "A"],
          ["Webkit", "iPod Touch / iPhone	", "iPod",	"420.1	", "A"],
          ["Webkit", "S60", "S60", "413	", "A"],
          ["Presto", "Opera 7.0", "Win 95+ / OSX.1+", "-", "A"],
          ["Presto", "Opera 7.5", "Win 95+ / OSX.2+", "-", "A"],
          ["Presto", "Opera 8.0", "Win 95+ / OSX.2+", "-", "A"],
          ["Presto", "Opera 8.5", "Win 95+ / OSX.2+", "-", "A"],
          ["Presto", "Opera 9.0", "Win 95+ / OSX.3+", "-", "A"],
          ["Presto", "Opera 9.2", "Win 88+ / OSX.3+", "-", "A"],
          ["Presto", "Opera 9.5", "Win 88+ / OSX.3+", "-", "A"],
          ["Presto", "Opera for Wii	", "Wii", "-", "A"],
          ["Presto", "Nokia N800",	 "N800", "-", "A"],
          ["Presto", "Nintendo DS",	"Nintendo DS	", "8.5",	"C/A1"],
          ["KHTML", "Konqureror 3.1", "KDE 3 .1	", "3.1	", "C"],
          ["KHTML", "Konqureror 3.3", "KDE 3 .3	", "3.3	", "A"],
          ["KHTML", "Konqureror 3.5", "KDE 3 .5	", "3.5	", "A"],
          ["Tasman", "Internet Explorer 4.5", "Mac OS 8-9	", "-	", "X"],
          ["Tasman", "Internet Explorer 5.1", "Mac OS 7.6-9	", "1	", "C"],
          ["Tasman", "Internet Explorer 5.2", "Mac OS 8-X	", "1	", "C"],
          ["Misc", "NetFront 3.1", "Embedded devices","-", "C"],
          ["Misc", "NetFront 3.4", "Embedded devices", "-", "A"],
          ["Misc", "Dillo 0.8", "Embedded devices","-", "X"],
          ["Misc", "Links", "Text only", "-", "X"],
          ["Misc", "Lynx", "Text only", "-", "X"],
          ["Misc", "IE Mobile", "Windows Mobile 6", "-", "C"],
          ["Misc", "PSP browser", "PSP", "-", "C"],
          ["Other", "All Other", "-", "-", "U"]
        ]

module.exports = {
  name: 'SimpleTables',
  mounted: function () {
    let $ = window.$
      $('#example1').DataTable({
            "data": tableData,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": true,
            "autoWidth": false
      }

      )
    // })
  }
}
</script>
<style>
  /* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/
  
  @import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
  table.dataTable thead .sorting:after,
  table.dataTable thead .sorting_asc:after,
  table.dataTable thead .sorting_desc:after {
    font-family: 'FontAwesome';
  }
  
  table.dataTable thead .sorting:after {
    content: "\f0dc";
  }
  
  table.dataTable thead .sorting_asc:after {
    content: "\f0dd";
  }
  
  table.dataTable thead .sorting_desc:after {
    content: "\f0de";
  }

</style>
