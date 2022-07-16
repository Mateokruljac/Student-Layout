public with sharing class RemoveExam {
    public RemoveExam() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Student__c> delExam(){
        return [select Name,surname__c,Exam_period__r.subject__c from Student__c];
    }
    }
