<script>
import 'microlight';
export let code = '';
</script>

<style>
	.card{
		background-color: #00c1f1;
		margin: 1rem;
		border-radius: .3rem;
		box-shadow: #000000;
		padding: .3rem;
	}

	.header{
		color: white;
		padding:.3rem .5rem;
		font-weight: bolder;
		line-height: 24px;
	}

	.showcase{
		background-color: #FFFFFF;
		border:1px solid #485366;
		margin:.3rem;
		padding: .5rem;
		border-radius: .2rem;
	}

	.code{
		color:#FFFFFF;
		background-color: #535353;
		margin:.3rem;
		padding:10px;
		border-radius: .2rem;
	}

	.microlight {
		font-family: monospace;
		white-space: pre;
		color: #C4E4E8;    
	}
</style>

<div class="card">
	<div class="header"><slot name="header"></slot></div>
	<div class="showcase"><slot name="showcase"></slot></div>
	<div class="code">
		<pre><code class="microlight">{code.trim()}</code></pre>
	</div>
</div>