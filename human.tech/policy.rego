# Human.tech Demo Policy
# --------------------------------

package human_tech_demo

# Allow request only if no checks fail
default allow := true
allow := false if {
    deny
}

# From Intent
to_address := input.to

# Policy Params
check_stamps_score = data.params.chech_stamps_score
check_models_score = data.params.check_models_score
check_poch = data.params.check_poch

models_score_threshold = data.params.model_score_threshold
poch_score_threshold = data.params.poch_score_threshold

# Policy Data
is_stamps_score_passing := data.data.stamps_score.passing_score
models_score := data.data.models_score.details.models.aggregate.score
poch_score := data.data.proof_of_clean_hands.total

# Conditions
deny if {
    lower(checked_address) != lower(to_address)
}

deny if {
    check_stamps_score
    !is_stamps_score_passing
}

deny if {
    check_models_score
    models_score < models_score_threshold
}

deny if {
    check_poch
    poch_score < poch_score_threshold
}
