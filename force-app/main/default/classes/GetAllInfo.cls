public with sharing class GetAllInfo {
    public GetAllInfo() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Student__c> Info (){
        return [select name,surname__c from Student__c order by surname__c asc];
    } 
}
