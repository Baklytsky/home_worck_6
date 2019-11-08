$('#all').on('click', ()=> {
    $('.portfolio-photo-item').removeClass('hide');
});
$('#design').on('click', ()=> {
    $('.portfolio-photo-item').addClass('hide');
    $('.design-item').removeClass('hide');
});
$('#web').on('click', ()=> {
    $('.portfolio-photo-item').addClass('hide');
    $('.web-item').removeClass('hide');
});
$('#illustrator').on('click', ()=> {
    $('.portfolio-photo-item').addClass('hide');
    $('.illustrator-item').removeClass('hide');
});
$('#motion').on('click', ()=> {
    $('.portfolio-photo-item').addClass('hide');
    $('.motion-item').removeClass('hide');
});
