<template>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <div class="box-header">
              <h3 class="box-title">CK Editor
                <small>Advanced and full of features</small>
              </h3>
              <!-- tools box -->
              <div class="pull-right box-tools">
                <button type="button" class="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i class="fa fa-times"></i></button>
              </div>
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form>
                    <textarea id="editor1" name="editor1" rows="10" cols="80">
                                            This is my textarea to be replaced with CKEditor.
                    </textarea>
              </form>
            </div>
          </div>
          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Bootstrap WYSIHTML5
                <small>Simple and fast</small>
              </h3>
              <!-- tools box -->
              <div class="pull-right box-tools">
                <button type="button" class="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-default btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i class="fa fa-times"></i></button>
              </div>
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form>
                <textarea id="wysi" class="textarea" placeholder="Place some text here" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
              </form>
            </div>
          </div>
        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
    </section>
</template> 
<script>
  import $ from 'jquery'
  // import CKEDITOR from 'ckeditor'
  // import CKEDITOR from '../../../static/js/plugins/ckeditor/ckeditor.js'
  // require('wysihtml')

  export default {
    name: 'Editor',
    mounted () {
      // Replace the <textarea id="editor1"> with a CKEditor
      // instance, using default configuration.
      // $.getScript('/static/js/plugins/ckeditor/ckeditor.js', function (data, textStatus, jqxhr) { 
        let CKEDITOR = window['CKEDITOR']
        
        CKEDITOR.replace('editor1')
      // })
      // let CKEDITOR = window['CKEDITOR']

      // bootstrap WYSIHTML5 - text editor
      // $.getScript('/static/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js', function (data, textStatus, jqxhr) {
      // //     console.log('----------------', wysihtml5)
      //     let wysihtml5 = window['wysihtml5']
      //     $.fn.wysihtml5 = wysihtml5
          window.$('#wysi').wysihtml5()
      // })
      // window.$('#wysi').wysihtml5()
    }
  }
</script>
<style>
@import url('/static/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css');

</style>

