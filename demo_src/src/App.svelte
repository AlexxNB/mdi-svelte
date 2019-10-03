<script>
	import Example from './Example.svelte';
	import Icon from './../../src/Index.svelte';
	import { mdiCards } from '@mdi/js';
	import { mdiCardsSpade } from '@mdi/js';
	import { mdiCardsClub } from '@mdi/js';
	import { mdiCardsDiamond } from '@mdi/js';
	import { mdiCardsHeart } from '@mdi/js';
	import { mdiDocker } from '@mdi/js';
</script>

<style>

:global(body) {
	margin: 0;
	color:#555555;
	padding:0;
	margin:0;
	background-color: #FFFFFF;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.container{
	max-width:800px;
	margin: 0px auto;
}

h1,h2 {
	margin:0;
}
h2{
	color:#aaaaaa;
}
</style>


<div class="container">
	<h1>Svelte component for Material Design Icons</h1>
	<h2>Demo page</h2>

	<Example code={`
	<!--
	Installation:
	npm i -D mdi-svelte

	Look for icons names at https://materialdesignicons.com 
	-->
	<script>
		import Icon from 'mdi-svelte';
		import { mdiCardsSpade } from '@mdi/js';
		import { mdiCardsClub } from '@mdi/js';
		import { mdiCardsDiamond } from '@mdi/js';
		import { mdiCardsHeart } from '@mdi/js';
	</script>

	<Icon path={mdiCardsSpade}/>
	<Icon path={mdiCardsClub}/>
	<Icon path={mdiCardsDiamond}/>
	<Icon path={mdiCardsHeart}/>
	`}>
		<div slot="header">Basic usage</div>
		<div slot="showcase">
			<Icon path={mdiCardsSpade} />
			<Icon path={mdiCardsClub}/>
			<Icon path={mdiCardsDiamond}/>
			<Icon path={mdiCardsHeart}/>
		</div>
	</Example>

	<Example code={`
	...

	<span style="color:gold">
		Text and <Icon path={mdiCardsSpade}/> are GOLD!
	</span>
	`}>
		<div slot="header">Color inheritance</div>
		<div slot="showcase">
			<span style="color:gold">
				Text and <Icon path={mdiCardsSpade}/> are GOLD!
			</span>
		</div>
	</Example>


	<Example code={`
	...

	<Icon path={mdiCardsSpade} size="10px"/>
	<Icon path={mdiCardsClub} size="2rem"/>
	<Icon path={mdiCardsDiamond} size="2"/>
	<Icon path={mdiCardsHeart} size={4}/>
	`}>
		<div slot="header">Property: <em>size</em></div>
		<div slot="showcase">
			<Icon path={mdiCardsSpade} size="10px"/>
			<Icon path={mdiCardsClub} size="2rem"/>
			<Icon path={mdiCardsDiamond} size="2"/>
			<Icon path={mdiCardsHeart} size={4}/>
		</div>
	</Example>


	<Example code={`
	...

	<Icon path={mdiCardsSpade} color="black" />
	<Icon path={mdiCardsClub} color="#000000" />
	<Icon path={mdiCardsDiamond} color="red"/>
	<Icon path={mdiCardsHeart} color="rgb(255,0,0)"/>
	`}>
		<div slot="header">Property: <em>color</em></div>
		<div slot="showcase">
			<Icon path={mdiCardsSpade} color="black" />
			<Icon path={mdiCardsClub} color="#000000" />
			<Icon path={mdiCardsDiamond} color="red"/>
			<Icon path={mdiCardsHeart} color="rgb(255,0,0)"/>
		</div>
	</Example>


	<Example code={`
	...

	<Icon path={mdiCardsSpade} rotate="-45" />
	<Icon path={mdiCardsClub} rotate="30" />
	<Icon path={mdiCardsDiamond} rotate="67" />
	<Icon path={mdiCardsHeart} rotate="270" />  
	`}>
		<div slot="header">Property: <em>rotate</em></div>
		<div slot="showcase">
			<Icon path={mdiCardsSpade} rotate="-45" />
			<Icon path={mdiCardsClub} rotate="30" />
			<Icon path={mdiCardsDiamond} rotate="67" />
			<Icon path={mdiCardsHeart} rotate="270" />
		</div>
	</Example>


	<Example code={`
	...

	<Icon path={mdiDocker} />
	<Icon path={mdiDocker} flip="h" />
	<Icon path={mdiDocker} flip="v" />

	<!-- same as rotate="180"-->
	<Icon path={mdiDocker} flip />  
	`}>
		<div slot="header">Property: <em>flip</em></div>
		<div slot="showcase">
			<Icon path={mdiDocker}/>
			<Icon path={mdiDocker} flip="h"/>
			<Icon path={mdiDocker} flip="v"/>
			<Icon path={mdiDocker} flip/>
		</div>
	</Example>


	<Example code={`
	...

	<Icon path={mdiCardsSpade} spin="-2" />
	<Icon path={mdiCardsClub} spin="4" />
	<Icon path={mdiCardsDiamond} spin="-0.5" />

	<!-- same as spin="2"-->
	<Icon path={mdiCardsHeart} spin /> 
	`}>
		<div slot="header">Property: <em>spin</em></div>
		<div slot="showcase">
			<Icon path={mdiCardsSpade} spin="-2" />
			<Icon path={mdiCardsClub} spin="4" />
			<Icon path={mdiCardsDiamond} spin="-0.5" />
			<Icon path={mdiCardsHeart} spin />
		</div>
	</Example>
</div>