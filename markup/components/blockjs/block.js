const $range = $('.js-range-slider');
$range.ionRangeSlider({
    grid: true,
    from: 2,
    values: [
        'Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать', 'Пишу сложный js с нуля',
    ]
});
