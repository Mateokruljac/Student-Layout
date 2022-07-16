public with sharing class DisplayDataUsingWire {
    public DisplayDataUsingWire() {

    }
    @AuraEnabled
    public static list<ExamPeriod> getExamPeriod(){
        return [select subject__c, type__c, datetime__c from Exam_Period__c where active__c = 'Checked']
    }
        }
    }
}
