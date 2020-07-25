<script context="module">
    export async function preload(page) {
        const { projectId } = page.params
        return {}
    }
</script>

<script>
    import Task from '@web/components/Task.svelte'

    let taskChildrenMapping = {
        abc: {
            abc1: true,
            abc2: true,
        },
        abc1: {
            abc4: true,
            abc5: true,
        },
        abc2: {
            abc3: true,
        },
    }
    let taskDetail = {
        abc: {
            _id: 'abc',
            userId: 1,
            projectId: 1,
            parentTaskId: null,
            content: 'task abc',
            done: false,
        },

        abc1: {
            _id: 'abc1',
            userId: 1,
            projectId: 1,
            parentTaskId: 'abc',
            content: 'task abc1',
            done: false,
        },

        abc2: {
            _id: 'abc2',
            userId: 1,
            projectId: 1,
            parentTaskId: 'abc',
            content: 'task abc2',
            done: false,
        },

        abc3: {
            _id: 'abc3',
            userId: 1,
            projectId: 1,
            parentTaskId: 'abc2',
            content: 'task abc3',
            done: false,
        },

        abc4: {
            _id: 'abc4',
            userId: 1,
            projectId: 1,
            parentTaskId: 'abc1',
            content: 'task abc4',
            done: false,
        },

        abc5: {
            _id: 'abc5',
            userId: 1,
            projectId: 1,
            parentTaskId: 'abc1',
            content: 'task abc5',
            done: false,
        },

        xyz: {
            _id: 'xyz',
            userId: 1,
            projectId: 1,
            parentTaskId: null,
            content: 'task xyz',
            done: false,
        },
    }
    let rootTasks = ['abc', 'xyz']
</script>

<section class="container-fluid">
    <!-- Back button -->

    <!-- Tasks -->
    {#each rootTasks as taskId}
        <div class="mt-3">
            <Task {taskId} {taskDetail} {taskChildrenMapping} />
        </div>
    {/each}
</section>
