# Chainalysis Sanctions Policy
# --------------------------------

package newton_quickstart

# By default, deny requests.
default allow := true

# From Intent
to_address := input.to

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

deny if {
    lower(checked_address) != lower(to_address)
}

deny if {
    kyc_status != "approved"
    name_first == ""
    name_last == ""
}

deny if {
    is_sanctioned
}
