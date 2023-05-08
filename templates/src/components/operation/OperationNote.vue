<template>
	<q-btn round flat icon="spatial_audio" @click="showOperation">
		<q-tooltip class="bg-indigo" :offset="[10, 10]"> 操作教程 </q-tooltip>
	</q-btn>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
	name: "showOperation",
	components: {},
	setup() {
		const $q = useQuasar();

		onMounted(() => {});

		return {
			showOperation() {
				$q.dialog({
					title: "Alert<em>!</em>",
					message:
						'<em>I can</em> <span class="text-red">use</span> <strong>HTML</strong>',
					html: true,
				})
					.onOk(() => {
						// console.log('OK')
					})
					.onCancel(() => {
						// console.log('Cancel')
					})
					.onDismiss(() => {
						// console.log('I am triggered on both OK and Cancel')
					});
			},
		};
	},
});
</script>
