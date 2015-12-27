$(document).ready(function(){
    $('select[name="inverse-dropdown"], select[name="inverse-dropdown-optgroup"], select[name="inverse-dropdown-disabled"]').select2({dropdownCssClass: 'select-inverse-dropdown'});
    $('select[name="searchfield"]').select2({dropdownCssClass: 'show-select-search'});
    $('select[name="inverse-dropdown-searchfield"]').select2({dropdownCssClass: 'select-inverse-dropdown show-select-search'});

    var provinces = ["浙江省", "广东省", "福建省", "山西省", "山东省","湖北省", "湖南省", "陕西省", "上海市", "北京市", "广西省"];
    var substringMatcher = function (strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
                $.each(strs, function (i, str) {
                    if (substrRegex.test(str)) {
                        matches.push({ value: str });
                    }
                });
                cb(matches);
            };
        };

        $('#key').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },{
            name: 'provinces',
            displayKey: 'value',
            source: substringMatcher(provinces)
        });


});