<script lang="ts">
	import solutions from '$lib/solutions';
	import { getData } from '$lib';

	const possibleSolutions = ['Part one', 'Part two'];

	let activeSolution = possibleSolutions[0];
	let result: any = '';

	const runSolution = async () => {
		switch (activeSolution) {
			case 'Part one':
				result = solutions.partOne(await getData('sample.txt'));
				break;
			case 'Part two':
				result = solutions.partTwo(await getData('sample.txt'));
				break;
		}
	};
</script>

<main>
	<div class="wrapper">
		<div>
			<select bind:value={activeSolution}>
				{#each possibleSolutions as solution}
					<option value={solution}>{solution}</option>
				{/each}
			</select>
			<button on:click={runSolution}>Run</button>
		</div>
		<span>Result: {result}</span>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		padding: 1rem;
		max-width: 720px;
		margin: 0 auto;
	}

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
