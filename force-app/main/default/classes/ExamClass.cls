public with sharing class ExamClass {
    public ExamClass() {

    }
    @AuraEnabled(cacheable = true)
    public static list<Exam_Period__c> getExamPeriod(){
        return [select subject__c, name, Date_time__c, Active__c from Exam_Period__c];
}
}