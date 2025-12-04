# Chainalysis Sanctions Policy
# --------------------------------

package ofac_kyc

# By default, deny requests.
default allow := false

# From Intent
to_address := input.to

# From Policy Data
checked_address := data.data.address
is_sanctioned := data.data.ofac_sanctioned
kyc_status := data.data.kyc_status
kyc_name_first := data.data.kyc_name_first
kyc_name_last := data.data.kyc_name_last

# Allow the action if the `to` address is not sanctioned
allow if {
    lower(checked_address) == lower(to_address)
    not is_sanctioned
    kyc_status == "approved"
    kyc_name_first != ""
    kyc_name_last != ""
}
