const writeFile = require('./writeFile');

const imports = [
    "@use 'sass:map';",
    "@use 'sass:list';",
    "@use 'sass:meta';",
    "@import './breakpoints.scss';",
    "@import './mixins.scss';",
].join('\n');

const helpers = `
@function getResponsiveProperty($var, $breakpoints...) {
    $property: var(--#{$var});

    @each $breakpoint in $breakpoints {
        $property: var(--#{$var}-#{$breakpoint}, $property);
    }

    @return $property;
}

@mixin generateResponsiveProperties($breakpoints, $properties) {
    $keys: map.keys($breakpoints);

    @each $var, $value in $properties {
        @include generateResponsiveProperty($var, 'initial', $keys);
    }

    @each $var, $prop in $properties {
        #{$prop}: calcResponsiveProperty($var);
    }

    @for $index from 1 to length($keys) {
        $key: nth($keys, $index);
        $value: map-get($breakpoints, $key);

        &__#{$key} {
            @include mq($value) {
                @each $var, $prop in $properties {
                    #{$prop}: calcResponsiveProperty($var, $key);
                }
            }
        }
    }
}

@mixin generateResponsiveProperty($var, $default, $keys) {
    --#{$var}: #{$default};

    @for $index from 1 to length($keys) {
        $key: nth($keys, $index);

        @if $index == 1 {
            --#{$var}-#{$key}: var(--#{$var});
        }

        @if $index > 1 {
            $prev: nth($keys, $index - 1);

            @if $prev != false {
                --#{$var}-#{$key}: var(--#{$var}-#{$prev});
            }
        }
    }
}

@function calcResponsiveProperty($var, $breakpoint: false) {
    @if $breakpoint == false {
        @return var(--#{$var});
    }

    $property: var(--#{$var}-#{$breakpoint});

    @return $property;
}
`;

const gridLayoutMixin = `
@mixin gridLayout {
    $properties: (
        (
            'cols': 'grid-template-columns',
            'rows': 'grid-template-rows',
            'gap': 'gap',
            'justify': 'justify-items',
            'align': 'align-items',
        )
    );

    .gridLayout {
        display: grid;
        @include generateResponsiveProperties($breakpointList, $properties);
    }
}
`;

const gridLayoutItemMixin = `
@mixin gridLayoutItem {
    $properties: (
        (
            'col': 'grid-column',
            'row': 'grid-template-rows',
            'justify': 'justify-self',
            'align': 'align-self',
            'order': 'order',
        )
    );

    .gridLayoutItem {
        @include generateResponsiveProperties($breakpointList, $properties);
    }

}
`;

const flexLayoutMixin = `
@mixin flexLayout {
    $properties: (
        (
            'gap': 'gap',
            'justify': 'justify-content',
            'align': 'align-items',
            'wrap': 'flex-wrap',
        )
    );

    .flexLayout {
        display: flex;
        @include generateResponsiveProperties($breakpointList, $properties);
    }
}
`;

const flexLayoutItemMixin = `
@mixin flexLayoutItem {
    $properties: (
        (
            'justify': 'justify-self',
            'align': 'align-self',
            'order': 'order',
        )
    );

    .flexLayoutItem {
        @include generateResponsiveProperties($breakpointList, $properties);
    }
}
`;

const serializeLayoutMixins = (config) => {
    const fileData = [
        imports,
        helpers,
        gridLayoutMixin,
        gridLayoutItemMixin,
        flexLayoutMixin,
        flexLayoutItemMixin,
    ].join('\n');

    writeFile({ name: 'layoutMixins', fileData, config });
};

module.exports = serializeLayoutMixins;
