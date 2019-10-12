<?php
namespace MM\Lottery\Jquery;

function lottery_plugin_widget() {
    global $wp_meta_boxes;
    add_meta_box('lottery_dashboard_widget', __('Random numbers for Lottery', 'mm-lottery-jquery'), 'MM\Lottery\Jquery\dashboard_lottery_plugin', 'dashboard', 'side', 'high');
}
   
function dashboard_lottery_plugin() {
    
    $output = '';

    $output .= '<span id="lottery-number">Ihre Lottozahlen</span>';

    $output .= '<div id="lottery-zusatz"></div>';

    $output .= '<div><button class="button-primary" id="neu">' . __('New', 'mm-lottery-jquery') . '</button></div>';

    echo $output;
    
}