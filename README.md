# WordPress Customizer Toggle Control

A generic toggle control you can use to replace the checkbox control.

<img src="assets/customizer-toggle-control.gif" />

## Demo

I've added this control to my [customizer demo theme](https://github.com/soderlind/WordPress Customizer Toggle Control).

## Installing the control

Clone this repository and include the class:

```php
/**
 * Check for WP_Customizer_Control existence before adding custom control because WP_Customize_Control
 * is loaded on customizer page only
 *
 * @see _wp_customize_include()
 */
if ( class_exists( 'WP_Customize_Control' ) ) {
	require_once( dirname(__FILE) . '/class-customizer-toggle-control.php' );
}
```

## Adding the control

```php
$wp_customize->add_control( new Customizer_Toggle_Control( $wp_customize, 'my_control', array(
		'label'	      => esc_html__( 'Toggle me on or off', 'my-lang' ),
		'section'     => 'my_section',
		'settings'    => 'my_setting',
		'type'        => 'ios',// light, ios, flat
) ) );
```

## Toggling the control title

You must update the [js/customizer-toggle-control.js](js/customizer-toggle-control.js#L10-L15) file if you want to change the title color when a toggle is disabled/enabled.


## Credits

The [CSS](pure-css-toggle-buttons) is  copyright (c) 2016 by Mauricio Allende

You can see his [demo at CodePen.io](http://codepen.io/mallendeo/pen/eLIiG)

The CSS is [licensed](https://blog.codepen.io/legal/licensing/) under the terms of the [MIT license](http://opensource.org/licenses/MIT)

## Copyright and License

WordPress Customizer Toggle Control is copyright 2016 Per Soderlind

WordPress Customizer Toggle Control is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 2 of the License, or (at your option) any later version.

WordPress Customizer Toggle Control is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with the Extension. If not, see http://www.gnu.org/licenses/.
