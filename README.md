# scroll-animate
A jQuery plugin that animate elements with the scroll event using CSS3 animations

## Usage

Include your CSS animation classes in your .css file. For example you can use
**animate.css** as animation library.

```html
<link rel="stylesheet" href="/dist/animate.css">
```

Include jQuery and the scroll-animate at the end of the body tag and initialize the plugin
for every data-animate elements.

```html
<div style="margin-top: 1200px;">
    <h1 data-animate="fadeInUp"><strong>Titulo uno</strong></h1>
</div>
<div style="margin-top: 20px;">
    <h1 data-animate="fadeInUp"><strong>Titulo uno</strong></h1>
</div>
<div style="margin-top: 20px;">
    <div data-animate="fadeInUp">
        <h1><strong>Titulo uno</strong></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum doloremque ratione, voluptates quae sint nam aliquam explicabo dolore fugiat earum eveniet temporibus quasi voluptatem, cumque molestiae, aspernatur qui ullam autem?</p>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
<script src="/path/to/jquery.scroll-animate.js"></script>
<script>
    $('[data-animate]').scrollAnimate({startAnimation: 'animated'});
</script>
```

Use **data-animate="animationName"** to select the animation or animations that you
want to be execute.
The only one property that you can set in settings is *startAnimation* that is by default
*animated*(from animate.css) and defines the CSS class that will start the animation.