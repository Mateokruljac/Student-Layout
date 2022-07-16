public with sharing class SrudentsExam {
    public SrudentsExam() {

    }
    @AuraEnabled (cacheable = true)
    public static list<Student__c> getStudentList(){
        return [select name,surname__c,Exam_period__r.Name,Exam_period__r.Date_time__c from Student__c 
        where Exam_period__r.Name like '%writing%'];
}
}
