<aura:application extends="force:slds">
    <c:Expense_Header />
	<div class = "slds-grid slds-gutters slds-m-left_medium slds-m-right_medium slds-m-top_medium slds-p-bottom_medium">
        <div class = "slds-col slds-box  slds-size_1-of-4 " style="height: 380px;">
            <c:Category_Amount_Chart />
        </div>
        <div class = "slds-col slds-box slds-size_3-of-4 " style="height: 380px;">  
            <c:Date_Amount_Chart />
        </div>
        <!--div class = "slds-col slds-box slds-size_1-of-4 " style="height: 380px;">      
        </div-->
    </div>
   
         <c:Expense_Table />
    
</aura:application>