public with sharing class CalculateNumbers {
    public CalculateNumbers() {

    }
    @AuraEnabled
    public static integer sum2numbers(integer firstNumber,integer secondNumber){
        return (firstNumber+secondNumber);
    }
}
