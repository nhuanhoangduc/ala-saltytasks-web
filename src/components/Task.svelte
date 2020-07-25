<script>
    import _ from 'lodash'

    export let taskId
    export let taskDetail
    export let taskChildrenMapping

    $: task = taskDetail[taskId] || {}
    $: childTaskIds = _.reduce(
        taskChildrenMapping[taskId],
        (memo, value, key) => {
            if (value) {
                memo.push(key)
            }
            return memo
        },
        [],
    )
</script>

<div class="d-inline-flex align-items-start">
    <div class="m-2 card" style="display: inline-flex">
        <div class="card-body">
            <p class="card-text">{task.content}</p>
        </div>
    </div>

    <div class="d-flex flex-column">
        {#if childTaskIds.length > 0}
            {#each childTaskIds as taskId}
                <svelte:self {taskId} {taskDetail} {taskChildrenMapping} />
            {/each}
        {/if}
    </div>
</div>
