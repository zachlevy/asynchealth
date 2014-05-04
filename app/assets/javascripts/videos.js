$(document).ready(function() {
        $("#webcam").scriptcam({ 
          fileReady:fileReady,
          cornerRadius:20,
          cornerColor:'e3e5e2',
          onError:onError,
          promptWillShow:promptWillShow,
          showMicrophoneErrors:false,
          showDebug:true,
          onWebcamReady:onWebcamReady,
          setVolume:setVolume,
          timeLeft:timeLeft,
          fileName:'demo609168',
          connected:showRecord
        });
        setVolume(0);
        $("#slider").slider({ animate: true, min: 0, max: 100 , value: 50, orientation: 'vertical', disabled:true});
        $("#slider").bind( "slidechange", function(event, ui) {
          $.scriptcam.changeVolume($( "#slider" ).slider( "option", "value" ));
        });
      });
      function showRecord() {
        $( "#recordStartButton" ).attr( "disabled", false );
      }
      function startRecording() {
        $( "#recordStartButton" ).attr( "disabled", true );
        $( "#recordStopButton" ).attr( "disabled", false );
        $( "#recordPauseResumeButton" ).attr( "disabled", false );
        $.scriptcam.startRecording();
      }
      function closeCamera() {
        $("#slider").slider( "option", "disabled", true );
        $("#recordPauseResumeButton" ).attr( "disabled", true );
        $("#recordStopButton" ).attr( "disabled", true );
        $.scriptcam.closeCamera();
        $('#message').html('Please wait for the file conversion to finish...');
      }
      function pauseResumeCamera() {
        if ($( "#recordPauseResumeButton" ).html() == 'Pause Recording') {
          $( "#recordPauseResumeButton" ).html( "Resume Recording" );
          $.scriptcam.pauseRecording();
        }
        else {
          $( "#recordPauseResumeButton" ).html( "Pause Recording" );
          $.scriptcam.resumeRecording();
        }
      }
      function fileReady(fileName) {
        $('#recorder').hide();
        fileName2=fileName.replace('mp4','gif');
        $('#message').html('The MP4 file is now dowloadable for five minutes over <a href="'+fileName+'">here</a>. The animated GIF can be downloaded <a href="'+fileName2+'">here</a>.');
        var fileNameNoExtension=fileName.replace(".mp4", "");
        jwplayer("mediaplayer").setup({
          width:320,
          height:240,
          file: fileName,
          image: fileNameNoExtension+"_0000.jpg"
        });
        $('#mediaplayer').show();
      }
      function onError(errorId,errorMsg) {
        alert(errorMsg);
      }
      function onWebcamReady(cameraNames,camera,microphoneNames,microphone,volume) {
        $( "#slider" ).slider( "option", "disabled", false );
        $( "#slider" ).slider( "option", "value", volume );
        $.each(cameraNames, function(index, text) {
          $('#cameraNames').append( $('<option></option>').val(index).html(text) )
        }); 
        $('#cameraNames').val(camera);
        $.each(microphoneNames, function(index, text) {
          $('#microphoneNames').append( $('<option></option>').val(index).html(text) )
        }); 
        $('#microphoneNames').val(microphone);
      }
      function promptWillShow() {
        alert('A security dialog will be shown. Please click on ALLOW.');
      }
      function setVolume(value) {
        value=parseInt(32 * value / 100) + 1;
        for (var i=1; i < value; i++) {
          $('#LedBar' + i).css('visibility','visible');
        }
        for (i=value; i < 33; i++) {
          $('#LedBar' + i).css('visibility','hidden');
        }
      }
      function timeLeft(value) {
        $('#timeLeft').val(value);
      }
      function changeCamera() {
        $.scriptcam.changeCamera($('#cameraNames').val());
      }
      function changeMicrophone() {
        $.scriptcam.changeMicrophone($('#microphoneNames').val());
      }
