define({'/content/chapter 18 apollo galileo interface preparation.htm':{i:[765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838],t:['APOLLO/GALILEO Interface Preparation','Preparing for Interface','MIR Level 92','MIR Device LNIATA','MIR to FILE - Apollo Configuration','APOLLO Interface Control','Establishing the Link - HMLMLNIATADA','Checking the Status of the Link - HMLD','Queue Message Count - HQC','Bring Up the Link - HMOMLNIATA-U','Bring Link Down - HMOMLNIATA-D','Bring Up the Link (Canadian Customers) - //HMUPAPOID','Bring Down the Link (Canadian Customers) - //HMDPAPOID','Quick Start - HQSLNIATA','Re-transmit Records','Controlling the Apollo MIR','Establishing Daily Procedures','Download Procedures for TBO','Interfacing Multiple Branches','Entries Affecting Invoices and Tickets','Customer ID or Customer Number T-CA ','W-Address Field W-','Phone Numbers P:CTYR/','Client E-mail Address P:CTYE/','Interface Invoice Over to TBO as Open F-XINV \u0026 F-XINVOICE','Agent ID Override T-SA','Outside Agent ID T-OA','Department Information T-DP ','UDIDS Remarks T-UD1 ','Group Affiliation T-GP','Client Remarks T-RM free flow','Passenger Statement Information N:Last Name/First* ','Invoice Remarks T-IM','Invoice Branch Override T-BR ','Form of Payment Override T-FP','Segment Information','Capturing Foreign and Local Currency','Mileage','Partial Payment T-PP','DESCRIPTOR CODES - Valid at Invoice Level','','DESCRIPTOR CODES - Valid at Booking Level','Hotel and Car Segments','Vendor Profiles','Automated Hotel Segment','Non-Automated Hotel Segment','Automated Car Segment','Non-Automated Car Segment','Itinerary Updates T-HU','ARC/BSP Ticketing and Invoicing','Voided Tickets','Sample APOLLO Invoice \u0026 Ticketing Commands','','Issue Automated ARC/BSP Ticket','Issue Automated ARC/BSP Full Refund Ticket','Issue Invoice for Hand ARC/BSP Ticket','Issue ARC/BSP EXCHANGE Ticket','Issue Invoice for Prepaid Ticket Advice (PTA)','Issue Invoice for Misc. Charge Order (MCO)-Option #1','Issue Invoice for Misc. Charge Order (MCO) - Option #2','Automated MCO for Service Fees','Discounts','OB Fees','Ancillary Airline Charges EMD','Non-ARC/BSP Supplier Invoice','Issuing Invoice for Non-ARC/BSP Air','Supplier Exchange Ticket','Issuing Invoice for Tour Deposit','Issuing Invoice for Tour Final Payment','Issuing Invoice for Cruise Deposit','Issuing Invoice for Cruise Final Payment','Issuing Invoice for Insurance','Issuing Invoice for Service Fees','Split Form of Payment'],b:['#APOLLO_GALILEO_Interface_Preparation','#Preparing_for_Interface_..26','#MIR_Level_92','#MIR_Device_LNIATA','#MIR_to_FILE_-_Apollo_Configuration','#APOLLO_Interface_Control','#Establishing_the_Link_-_HMLMLNIATADA','#Checking_the_Status_of_the_Link_-_HMLD','#Queue_Message_Count_-_HQC','#Bring_Up_the_Link_-_HMOMLNIATA-U','#Bring_Link_Down_-_HMOMLNIATA-D','#Bring_Up_the_Link_(Canadian_Customers)_-___HMUPAPOID','#Bring_Down_the_Link_(Canadian_Customers)_-___HMDPAPOID','#Quick_Start_-_HQSLNIATA','#Re-transmit_Records','#Controlling_the_Apollo_MIR','#Establishing_Daily_Procedures_..27','#Download_Procedures_for_TBO_..28','#Interfacing_Multiple_Branches_..29','#Entries_Affecting_Invoices_and_Tickets_..30','#Customer_ID_or_Customer_Number_T-CA','#W-Address_Field_W-','#Phone_Numbers_P_CTYR_','#Client_E-mail_Address_P_CTYE_','#Interface_Invoice_Over_to_TBO_as_Open_F-XINV_\u0026_F-XINVOICE','#Agent_ID_Override_T-SA','#Outside_Agent_ID_T-OA','#Department_Information_T-DP','#UDIDS_Remarks_T-UD1','#Group_Affiliation_T-GP','#Client_Remarks_T-RM_free_flow','#Passenger_Statement_Information_N_Last_Name_First*','#Invoice_Remarks_T-IM','#Invoice_Branch_Override_T-BR','#Form_of_Payment_Override_T-FP','#Segment_Information_..31','#Capturing_Foreign_and_Local_Currency_..32','#Mileage_..33','#Partial_Payment_T-PP','#DESCRIPTOR_CODES_-_Valid_at_Invoice_Level_..34','#_gen_','#DESCRIPTOR_CODES_-_Valid_at_Booking_Level_..35','#Hotel_and_Car_Segments_..36','#Vendor_Profiles','#Automated_Hotel_Segment_..37','#Non-Automated_Hotel_Segment_..38','#Automated_Car_Segment_..39','#Non-Automated_Car_Segment_..40','#Itinerary_Updates_T-HU','#ARC_BSP_Ticketing_and_Invoicing_..42','#Voided_Tickets_..43','#Sample_APOLLO_Invoice_\u0026_Ticketing_Commands','#_gen__..44','#Issue_Automated_ARC_BSP_Ticket_..45','#Issue_Automated_ARC_BSP_Full_Refund_Ticket','#Issue_Invoice_for_Hand_ARC_BSP_Ticket_..46','#Issue_ARC_BSP_EXCHANGE_Ticket','#Issue_Invoice_for_Prepaid_Ticket_Advice_(PTA)_..47','#Issue_Invoice_for_Misc._Charge_Order_(MCO)-Option__1','#Issue_Invoice_for_Misc._Charge_Order_(MCO)_-_Option__2','#Automated_MCO_for_Service_Fees','#Discounts_..48','#OB_Fees_..49','#Ancillary_Airline_Charges_EMD_..50','#Non-ARC_BSP_Supplier_Invoice_..51','#Issuing_Invoice_for_Non-ARC_BSP_Air_..52','#Supplier_Exchange_Ticket_..53','#Issuing_Invoice_for_Tour_Deposit_..54','#Issuing_Invoice_for_Tour_Final_Payment_..55','#Issuing_Invoice_for_Cruise_Deposit_..56','#Issuing_Invoice_for_Cruise_Final_Payment_..57','#Issuing_Invoice_for_Insurance_..58','#Issuing_Invoice_for_Service_Fees_..59','#Split_Form_of_Payment_..60']},'/content/chapter 19 sabre interface preparation.htm':{i:[839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921],t:['SABRE Interface Preparation','Preparing for Interface','Interface Option 6','SABRE Printing Module','Images to File','SABRE Interface Control','Checking Status of the Interface Queue DX STATUS','Start Transmission of Pending Message DX TRANSMIT','Stop Transmission of Pending Message DX END','Stop Transmission Immediately DX HOLD','Retransmit Records DWLIST','Check History of Transmission Activity DX HISTORY','Establishing Daily Procedures','Download Procedures for TBO','Continued Procedures for TBO','Interfacing Multiple Branches','Processing by ARC Number','Entries Affecting Invoices and Tickets','Customer Number as the Interface ID DK ','Customer Number as a Remark 5.S*AN','Billing Address 5/','Phone Number 5.S*PH','Fax Number 5.S*FX','Client Email Address','Sales Agent Sabre Agent Sine','Agent ID Override or Additional Sales Agents 5.S*SA','Outside Agent ID 5.S*OA','Department Information 5.S*DP','UDIDS Remarks 5.S*UD1','Group Affiliation 5.S*GP','Invoice Remarks 5.S*IM','Client Remarks 5.S*RM FREE FLOW','Passenger Statement Information -LAST NAME/FIRST*','Fare Savings Report Information ','Form of Payment Override 5.S*FP','Branch Override 5.S*BR ','Face Value and Income Earned 5.S*FV','Segment Information','Capture Foreign and Local Currency','Mileage','Partial Payment 5.S*PP','Descriptor Codes - Valid at Invoice Level','Descriptor Codes - Valid at Booking Level','Hotel and Car Segments','Automated Hotel Segment','Itinerary Updates 5.S*HU','Foreign Currency in Hotel Bookings','Non-Automated Hotel Segment','Automated Car Segment','Manual Car Segment','ARC/BSP Ticketing and Invoicing','Sabre Invoice and Ticketing Commands','Issue Automated ARC/BSP Ticket','Issue Invoice for Hand Written ARC/BSP Ticket ','Issue Invoice for Prepaid Ticket Advice - PTA ','Issue Invoice for Miscellaneous Charge Order (MCO) ','Issue an Automated Exchange Ticket','Issue Invoice for Manual Exchange Ticket ','Electronic ARC Documents (ARC E Tickets)','Manual ARC Travel Agency Service Fees - CC FOP','Voids','Sabre MX Record ','Manual Refunds ACR*AIR','Discount ACL','Bulk Ticketing 5.S*FV','Appending or Overriding Data in an Automated AC line 5.S*MSXXX','Sabre Holding List HL ','Ancillary Airline Charges EMD','OB Fees','Non-ARC/BSP Supplier Invoice','Issuing Invoice for Tour Deposit','Issuing Invoice for Tour Final Payment','Issuing Invoice for Cruise Deposit','Issuing Invoice for Cruise Final Payment','Issuing Invoice for Service Fees','Issuing Invoice for Insurance','Issuing Invoice for Non-ARC/BSP Air','Supplier Exchange Ticket','Issuing Invoice for a Cruise Deposit (Sabre Deposit/Accounting Line)','Non-ARC Air - Ticketless - Southwest Electronic Tickets','Split Form of Payment','Discounts ACL ','Ancillary Seats Upgrades'],b:['#SABRE_Interface_Preparation','#Preparing_for_Interface_..2','#Interface_Option_6','#SABRE_Printing_Module','#Images_to_File','#SABRE_Interface_Control','#Checking_Status_of_the_Interface_Queue_DX_STATUS','#Start_Transmission_of_Pending_Message_DX_TRANSMIT','#Stop_Transmission_of_Pending_Message_DX_END','#Stop_Transmission_Immediately_DX_HOLD','#Retransmit_Records_DWLIST','#Check_History_of_Transmission_Activity_DX_HISTORY','#Establishing_Daily_Procedures_..3','#Download_Procedures_for_TBO_..4','#Continued_Procedures_for_TBO_..5','#Interfacing_Multiple_Branches_..6','#Processing_by_ARC_Number','#Entries_Affecting_Invoices_and_Tickets_..7','#Customer_Number_as_the_Interface_ID_DK','#Customer_Number_as_a_Remark_5.S*AN','#Billing_Address_5_','#Phone_Number_5.S*PH','#Fax_Number_5.S*FX','#Client_Email_Address','#Sales_Agent_Sabre_Agent_Sine','#Agent_ID_Override_or_Additional_Sales_Agents_5.S*SA','#Outside_Agent_ID_5.S*OA','#Department_Information_5.S*DP','#UDIDS_Remarks_5.S*UD1','#Group_Affiliation_5.S*GP','#Invoice_Remarks_5.S*IM','#Client_Remarks_5.S*RM_FREE_FLOW','#Passenger_Statement_Information_-LAST_NAME_FIRST*','#Fare_Savings_Report_Information_..8','#Form_of_Payment_Override_5.S*FP','#Branch_Override_5.S*BR','#Face_Value_and_Income_Earned_5.S*FV','#Segment_Information_..9','#Capture_Foreign_and_Local_Currency','#Mileage_..10','#Partial_Payment_5.S*PP','#Descriptor_Codes_-_Valid_at_Invoice_Level','#Descriptor_Codes_-_Valid_at_Booking_Level','#Hotel_and_Car_Segments_..11','#Automated_Hotel_Segment_..12','#Itinerary_Updates_5.S*HU','#Foreign_Currency_in_Hotel_Bookings','#Non-Automated_Hotel_Segment_..14','#Automated_Car_Segment_..15','#Manual_Car_Segment','#ARC_BSP_Ticketing_and_Invoicing_..16','#Sabre_Invoice_and_Ticketing_Commands','#Issue_Automated_ARC_BSP_Ticket_..17','#Issue_Invoice_for_Hand_Written_ARC_BSP_Ticket','#Issue_Invoice_for_Prepaid_Ticket_Advice_-_PTA','#Issue_Invoice_for_Miscellaneous_Charge_Order_(MCO)_..18','#Issue_an_Automated_Exchange_Ticket','#Issue_Invoice_for_Manual_Exchange_Ticket','#Electronic_ARC_Documents_(ARC_E_Tickets)','#Manual_ARC_Travel_Agency_Service_Fees_-_CC_FOP','#Voids','#Sabre_MX_Record','#Manual_Refunds_ACR*AIR','#Discount_ACL','#Bulk_Ticketing_5.S*FV','#Appending_or_Overriding_Data_in_an_Automated_AC_line_5.S*MSXXX','#Sabre_Holding_List_HL','#Ancillary_Airline_Charges_EMD_..19','#OB_Fees','#Non-ARC_BSP_Supplier_Invoice_..20','#Issuing_Invoice_for_Tour_Deposit_..21','#Issuing_Invoice_for_Tour_Final_Payment','#Issuing_Invoice_for_Cruise_Deposit_..22','#Issuing_Invoice_for_Cruise_Final_Payment','#Issuing_Invoice_for_Service_Fees','#Issuing_Invoice_for_Insurance_..23','#Issuing_Invoice_for_Non-ARC_BSP_Air_..24','#Supplier_Exchange_Ticket','#Issuing_Invoice_for_a_Cruise_Deposit_(Sabre_Deposit_Accounting_Line)','#Non-ARC_Air_-_Ticketless_-_Southwest_Electronic_Tickets','#Split_Form_of_Payment_..25','#Discounts_ACL','#Ancillary_Seats_Upgrades']},'/content/chapter 20 worldspan interface preparation.htm':{i:[922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989],t:['WORLDSPAN Interface Preparation','Preparing for Interface','WORLDSPAN Image to Disk- Single file U.S. TAIR','Worldspan - Multi-file INTL TAIR','TAIR Level 20','Worldspan Interface Control','Determine the LNIATA for Interface - JZXMSG DR PCC DT1P','Starting Transmission - YSTR LNIATA','Stopping Transmission - YSTP LNIATA','Re-Transmission of Interface Records ','Establishing Daily Procedures','TBO Transmission Procedures to the Winint32','Download Procedures for TBO','Interfacing Multiple Branches','Entries Affecting Invoices and Tickets','Customer ID or Customer Number 5-CA','Address Field 5-CB','Phone Number 5PH','Fax Number 5FX','Client E-mail Address','Agent ID','Agent ID Override 5SA','Outside Agent ID 5OA','Department Information 5DP','UDIDS Remarks 5UD1 ','Group Affiliation 5GP','Client Remarks','Fare Savings Report Information','Sorting Multiple Branches','Form of Payment Override 5FP ','Branch Override 5BR-7 ','Face Value and Income Earned 5FV','Segment Information','Capturing Foreign and Local Currency','Mileage','Partial Payment 5PP','DESCRIPTOR CODES - Valid at Invoice Level','DESCRIPTOR CODES - Valid at Booking Level','Hotel and Car Segments','Automated Hotel Segment','Automated Car Segment','Itinerary Updates 5HU-','Non-Automated Hotel Segment','Automated Car Segment','Non-Automated Car Segment','ARC/BSP Ticketing and Invoicing','Sample Worldspan Invoice \u0026 Ticketing Commands','Issue Automated ARC/BSP Ticket','Issue Invoice for Hand ARC/BSP Ticket','Issue Invoice for Prepaid Ticket Advice (PTA)','Issue Invoice for Miscellaneous Charge Order (MCO)','Automated MCO for Service Fee','Automated MCO for Refunds','Electronic Ticket Refund - ETR','Exchange Ticket','Voided Tickets ','Discounts','Ancillary Airline Charges EMD','Non-ARC/BSP Supplier Invoice','Issuing Invoice for Tour Deposit','Issuing Invoice for Tour Final','Issuing Invoice for Cruise Deposit','Issuing Invoice for Cruise Final','Issuing invoice for Service Fees','Issuing Invoice for Non-automated ARC/BSP Air','Issuing Invoice for Non-ARC/BSP Air','Issuing Invoice for Insurance','Split Form of Payment'],b:['#WORLDSPAN_Interface_Preparation','#Preparing_for_Interface','#WORLDSPAN_Image_to_Disk-_Single_file_U.S._TAIR','#Worldspan_-_Multi-file_INTL_TAIR','#TAIR_Level_20','#Worldspan_Interface_Control','#Determine_the_LNIATA_for_Interface_-_JZXMSG_DR_PCC_DT1P','#Starting_Transmission_-_YSTR_LNIATA','#Stopping_Transmission_-_YSTP_LNIATA','#Re-Transmission_of_Interface_Records','#Establishing_Daily_Procedures','#TBO_Transmission_Procedures_to_the_Winint32','#Download_Procedures_for_TBO','#Interfacing_Multiple_Branches','#Entries_Affecting_Invoices_and_Tickets','#Customer_ID_or_Customer_Number_5-CA','#Address_Field_5-CB','#Phone_Number_5PH','#Fax_Number_5FX','#Client_E-mail_Address','#Agent_ID','#Agent_ID_Override_5SA','#Outside_Agent_ID_5OA','#Department_Information_5DP','#UDIDS_Remarks_5UD1','#Group_Affiliation_5GP','#Client_Remarks','#Fare_Savings_Report_Information','#Sorting_Multiple_Branches','#Form_of_Payment_Override_5FP','#Branch_Override_5BR-7','#Face_Value_and_Income_Earned_5FV','#Segment_Information','#Capturing_Foreign_and_Local_Currency','#Mileage','#Partial_Payment_5PP','#DESCRIPTOR_CODES_-_Valid_at_Invoice_Level','#DESCRIPTOR_CODES_-_Valid_at_Booking_Level','#Hotel_and_Car_Segments','#Automated_Hotel_Segment','#Automated_Car_Segment','#Itinerary_Updates_5HU-','#Non-Automated_Hotel_Segment','#Automated_Car_Segment_..1','#Non-Automated_Car_Segment','#ARC_BSP_Ticketing_and_Invoicing','#Sample_Worldspan_Invoice_\u0026_Ticketing_Commands','#Issue_Automated_ARC_BSP_Ticket','#Issue_Invoice_for_Hand_ARC_BSP_Ticket','#Issue_Invoice_for_Prepaid_Ticket_Advice_(PTA)','#Issue_Invoice_for_Miscellaneous_Charge_Order_(MCO)','#Automated_MCO_for_Service_Fee','#Automated_MCO_for_Refunds','#Electronic_Ticket_Refund_-_ETR','#Exchange_Ticket','#Voided_Tickets','#Discounts','#Ancillary_Airline_Charges_EMD','#Non-ARC_BSP_Supplier_Invoice','#Issuing_Invoice_for_Tour_Deposit','#Issuing_Invoice_for_Tour_Final','#Issuing_Invoice_for_Cruise_Deposit','#Issuing_Invoice_for_Cruise_Final','#Issuing_invoice_for_Service_Fees','#Issuing_Invoice_for_Non-automated_ARC_BSP_Air','#Issuing_Invoice_for_Non-ARC_BSP_Air','#Issuing_Invoice_for_Insurance','#Split_Form_of_Payment']}});