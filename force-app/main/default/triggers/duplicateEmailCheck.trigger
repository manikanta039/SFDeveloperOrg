trigger duplicateEmailCheck on Lead (before insert, before update) {
    checkDuplicate.checker(trigger.new,trigger.oldMap,trigger.isInsert);
}