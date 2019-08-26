<script>
	import Icon from './../../src/index.svelte';
	import { mdiCards } from '@mdi/js';
	import { mdiCardsSpade } from '@mdi/js';
	import { mdiCardsClub } from '@mdi/js';
	import { mdiCardsDiamond } from '@mdi/js';
	import { mdiCardsHeart } from '@mdi/js';
</script>

<style>
*{
	color:#555555;
	padding:0;
	margin:0
}
h1,h2,h3 {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2{
	color:#aaaaaa;
}
h3{
	margin-top: 2rem;
}
</style>

<h1>Svelte component for Material Design Icons</h1>
<h2>Testing page</h2>

<h3>Basic usage</h3>

<Icon path={mdiCards}/>
<Icon path={mdiCardsSpade}/>
<Icon path={mdiCardsClub}/>
<Icon path={mdiCardsDiamond}/>
<Icon path={mdiCardsHeart}/>

<h3>Poperty: size</h3>

<Icon path={mdiCards} size={0.5}/>
<Icon path={mdiCardsSpade} size={1}/>
<Icon path={mdiCardsClub} size={2}/>
<Icon path={mdiCardsDiamond} size={3}/>
<Icon path={mdiCardsHeart} size={4}/>

<h3>Inline color</h3>

<div style="color:gold">This is GOLD text and icons should be gold also: 
	<Icon path={mdiCardsSpade}/>
	<Icon path={mdiCardsClub}/>
	<Icon path={mdiCardsDiamond}/>
	<Icon path={mdiCardsHeart}/>
</div>
<div style="color:green">This is GREEN text and icon should be green also: 
	<Icon path={mdiCards}/>
</div>

<h3>Property: color</h3>

<Icon path={mdiCards} color="green" />
<Icon path={mdiCardsSpade} color="black" />
<Icon path={mdiCardsClub} color="#000000" />
<Icon path={mdiCardsDiamond} color="red"/>
<Icon path={mdiCardsHeart} color="#FF0000"/>


<h3>Property: flip="h"</h3>

<Icon path={mdiCards} flip="h" />
<Icon path={mdiCardsSpade} flip="h" />
<Icon path={mdiCardsClub} flip="h" />
<Icon path={mdiCardsDiamond} flip="h" />
<Icon path={mdiCardsHeart} flip="h" />

<h3>Property: flip="v"</h3>

<Icon path={mdiCards} flip="v" />
<Icon path={mdiCardsSpade} flip="v" />
<Icon path={mdiCardsClub} flip="v" />
<Icon path={mdiCardsDiamond} flip="v" />
<Icon path={mdiCardsHeart} flip="v" />


<h3>Property: flip</h3>

<Icon path={mdiCards} flip />
<Icon path={mdiCardsSpade} flip />
<Icon path={mdiCardsClub} flip />
<Icon path={mdiCardsDiamond} flip />
<Icon path={mdiCardsHeart} flip />


<h3>Property: rotate</h3>

<Icon path={mdiCards} rotate="-45" />
<Icon path={mdiCardsSpade} rotate="10" />
<Icon path={mdiCardsClub} rotate="30" />
<Icon path={mdiCardsDiamond} rotate="45" />
<Icon path={mdiCardsHeart} rotate="90" />

<h3>Property: spin</h3>

<Icon path={mdiCards} spin />
<Icon path={mdiCardsSpade} spin="-2" />
<Icon path={mdiCardsClub} spin="1" />
<Icon path={mdiCardsDiamond} spin="-1" />
<Icon path={mdiCardsHeart} spin="4" />