const imports = ["@import './breakpoints.scss';"];

const helpers = [
    `@mixin getProperty($name, $value) {
            @if $value {
                #{$name}: $value;
            }
        }`,

    `@function defaultPropertyFn($property) {
            @return $property;
        }`,

    `@mixin cssProperty($propertyName, $propertyValue, $fn: defaultPropertyFn) {
        @if type-of($propertyValue) == 'map' {
            @each $size, $value in $propertyValue {
                 @if $size == $defaultBreakpoint {
                    @include getProperty($propertyName, call(get-function($fn), $value));
                }

                @if $size != $defaultBreakpoint {
                    @include mq(map-get($breakpointList, $size)) {
                        @include getProperty($propertyName, call(get-function($fn), $value));
                    }
                }
            }
        } @else {
            @include getProperty($propertyName, call(get-function($fn), $propertyValue));
        }
    }`,
].join('\n');

const funcsFormMixins = [
    `@function gridLayoutCellFn($property) {
        @if type-of($property) == 'number' {
            @if unit($property) == 'px' {
                @return $property;
            } @else {
                @return repeat($property, 1fr);
            }
        }
        @if type-of($property) == 'list' {
            @return list.join($property, (), $separator: space);
        }
        @if type-of($property) == 'string' {
            @return $property;
        }
        @return null;
    }`,
    `@function layoutGapFn($property) {
        @if type-of($property) == 'string' {
            @return $property;
        }
        @if type-of($property) == 'list' and length($property) == 2 {
            @return list.join($property, (), $separator: space);
        }
        @return null;
    }`,
    `@function gridLayoutItemCellFn($property) {
        @if type-of($property) == 'list' and length($property) == 2 {
            @return #{list.nth($property, 1)} / #{list.nth($property, 2)};
        }

        @if $property {
            @return #{span $property};
        }

        @return null;
    }`,
].join('\n');

const mixins = [
    `@mixin gridLayout($cols: 12, $gap: gs(3)) {
        display: grid;
        @include cssProperty('grid-template-columns', $cols, gridLayoutCellFn);
        @include cssProperty('gap', $gap, layoutGapFn);
    }`,
    `@mixin gridLayoutRows($rows) {
        @include cssProperty('grid-template-rows', $rows, gridLayoutCellFn);
    }`,
    `@mixin alignmentLayout($justify, $align) {
        @include cssProperty('justify-items', $justify);
        @include cssProperty('align-items', $align);
    }`,
    `@mixin gridLayoutItem($col: false, $row: false) {
        @include cssProperty('grid-column', $col, gridLayoutItemCellFn);
        @include cssProperty('grid-row', $row, gridLayoutItemCellFn);
    }`,
    `@mixin alignmentLayoutItem($justify: false, $align: false) {
        @include cssProperty('justify-self', $justify);
        @include cssProperty('align-self', $align);
    }`,
    `@mixin orderLayoutItem($order) {
        @include cssProperty('order', $order);
    }`,
    `@mixin flexLayout($gap) {
        display: flex;
        @include cssProperty('gap', $gap, layoutGapFn);
    }`,
    `@mixin section($mb: false, $padding: false, $bg: false) {
        @include cssProperty('margin-bottom', $mb);
        @include cssProperty('padding', $padding);
        @include cssProperty('background-color', $bg);
    }`,
].join('\n');

const getLayoutMixin = () => {
    return [imports, helpers, funcsFormMixins, mixins].join('\n');
};

module.exports = { getLayoutMixin };
