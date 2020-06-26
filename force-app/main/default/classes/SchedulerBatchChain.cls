global class SchedulerBatchChain implements Schedulable{
	global void execute(SchedulableContext ctx) {
		Database.executeBatch(new BatchChain('outbound'));
    }
}