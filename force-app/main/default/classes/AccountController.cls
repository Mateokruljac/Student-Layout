public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return [select id, name, type, industry from Account limit 10 ];
    }
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountsRecordsList(){
        return [select id, name, type, industry from Account where name = 'Mateo'];
    }
    }



