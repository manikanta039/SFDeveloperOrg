({
	handleCreateTask : function(component, event, helper) {
		const input = document.getElementById('task-input').value;
        let tasks = component.get("v.taskList");
        tasks.push(input);
        component.set('v.taskList',tasks);
	}
})