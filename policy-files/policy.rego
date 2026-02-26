# Newton Quickstart Policy
# --------------------------------

package newton_quickstart

# Allow request only if no checks fail
default allow := true
allow := false if {
    deny
}

# To address is the first argument
to_address := lower(input.decoded_function_arguments[0])

# Policy Params
check_ofac = data.params.check_ofac
check_kyc = data.params.check_kyc
check_fraud = data.params.check_fraud

# KYC
kyc_status := data.data.kyc_status
name_first := data.data.name_first
name_last := data.data.name_last

# OFAC
checked_address := data.data.address
is_sanctioned := data.data.sanctioned

# Fraud
risk_score := data.data.risk_score

deny if {
    lower(checked_address) != lower(to_address)
}

deny if {
    check_kyc
    kyc_status != "approved"
    name_first == ""
    name_last == ""
}

deny if {
    check_ofac
    is_sanctioned
}

deny if {
    check_fraud
    risk_score > 4
}
