public with sharing class ChooseClasss {
    public ChooseClasss() {
      
    }
    @AuraEnabled (cacheable = true)
    public static list<Student__c> getInfo(){
   
            return [select RegularExtraordinary__c from Student__c];
        
    }        
    
    }
