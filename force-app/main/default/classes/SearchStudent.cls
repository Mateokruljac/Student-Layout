public with sharing class SearchStudent {
    public SearchStudent() {
    }
    @AuraEnabled(cacheable = true)
    public static List<Student__c> getStudent(String Searched){
        String likeSearch = '%' + Searched +'%';
        return [select name,surname__c,Exam_period__r.Name from Student__c where name like:likeSearch];
    }
}
