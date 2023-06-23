$(function() {
    $('.dragdrop').draggable({
        revert: true,
        placeholder: true,
        droptarget: '.drop',
        drop: function (evt, droptarget) {
            var drag_id = $(this)[0].getAttribute("sid")
            var drop_id = droptarget.getAttribute('id')
            var dragtarget = $(this)
            ondropTarget(drag_id , drop_id , dragtarget  ,droptarget)
            console.log({ drag_id, drop_id, dragtarget, droptarget })
        }
    });
});

function ondropTarget(drag_id, drop_id, dragtarget, droptarget) {

    if(drag_id == drop_id){
       dragtarget.appendTo(droptarget).draggable('destroy')
       // The rest of your code
    } else {
       // The rest of your code
       console.log("error");
    }
}
