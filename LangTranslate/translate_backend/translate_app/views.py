# translate_app/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Translation

@csrf_exempt
def translate(request):
	if request.method=='POST':
		data=json.loads(request.body.decode('utf-8'))
		original_text=data.get('originalText', '')
		translated_text=original_text[::-1]
		translation=Translation.objects.create(
			original_text=original_text, 
			translated_text=translated_text)
		return JsonResponse({
			'original_text': translation.original_text,
			'translated_text': translation.translated_text
			})
	return JsonResponse({'error': 'Invalid request method'})