trigger createContact on Account (After insert) {
CreateContactClass.ifChemical(Trigger.new);

}